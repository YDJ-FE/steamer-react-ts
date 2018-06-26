/**
 * 高阶组件 注入saga
 *
 */
import * as React from 'react'
import * as PropTypes from 'prop-types'
import hoisNonReactStatics from 'hoist-non-react-statics'
import getInjectors from 'util/sagaInjectors'
import { SagaIterator } from 'redux-saga'

interface IP {
    store: IStore<any>
    [key: string]: any
}

interface IInjectSagaParams {
    /**
     * saga的名字（key）
     *
     * @type {string}
     * @memberof IInjectSagaParams
     */
    key: string
    /**
     * saga对象
     *
     * @type {SagaIterator}
     * @memberof IInjectSagaParams
     */
    saga: SagaIterator
    mode?: string
}

/**
 * Dynamically injects a saga, passes component's props as saga arguments
 *
 * @param {string} key A key of the saga
 * @param {Saga} saga A root saga that will be injected
 * @param {string} [mode] By default (constants.RESTART_ON_REMOUNT) the saga will be started on component mount and
 * cancelled with `task.cancel()` on component un-mount for improved performance. Another two options:
 *   - constants.DAEMON—starts the saga on component mount and never cancels it or starts again,
 *   - constants.ONCE_TILL_UNMOUNT—behaves like 'RESTART_ON_REMOUNT' but never runs it again.
 *
 */
export default ({ key, saga, mode }: IInjectSagaParams) => (
    WrappedComponent: React.ComponentType<any>
) => {
    class InjectSaga extends React.Component<IP> {
        static WrappedComponent = WrappedComponent
        static displayName = `withSaga(${WrappedComponent.displayName ||
            WrappedComponent.name ||
            'Component'})`

        static contextTypes = {
            store: PropTypes.object.isRequired
        }

        componentWillMount() {
            const { injectSaga } = this.injectors

            injectSaga(key, { saga, mode }, this.props)
        }

        componentWillUnmount() {
            const { ejectSaga } = this.injectors

            ejectSaga(key)
        }

        // tslint:disable-next-line:member-ordering
        injectors = getInjectors(this.context.store)

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    return hoisNonReactStatics<IP, any>(InjectSaga, WrappedComponent)
}
