/**
 * 高阶组件， 注入reducer
 */

import * as React from "react";
import { ReactPropTypes } from "react";
// import hoisNonReactStatics from "hoist-non-react-statics";
import getInjectors, { RESET_SUB_STATE } from "util/reducerInjectors";
import { Reducer } from "redux";
import * as PropTypes from "prop-types";
import hoisNonReactStatics from 'hoist-non-react-statics'

interface IP {
    store: IStore<any>;
    [key: string]: any;
}

interface IInjectReducerParams {
    /**
     * reducer key
     * 
     * @type {string}
     * @memberof IInjectReducerParams
     */
    key: string;
    /**
     * reducer instance
     * 
     * @type {Reducer<any>}
     * @memberof IInjectReducerParams
     */
    reducer: Reducer<any>;
    /**
     * 如果为true， 则页面ummount之后仍保持state， 否则重置初始值
     * 默认false
     * 
     * @type {boolean}
     * @memberof IInjectReducerParams
     */
    keepStateAlive?: boolean;
}

export default ({ key, reducer, keepStateAlive }: IInjectReducerParams) => (
    WrapperComponent: React.ComponentType<any>
) => {
    class ReducerInjector extends React.Component<IP> {
        public static WrapperComponent = WrapperComponent;

        public static displayName = `withReducer(${WrapperComponent.displayName ||
            WrapperComponent.name ||
            "Component"})`;

        static contextTypes = {
            store: PropTypes.object.isRequired
        };

        injectors = getInjectors(this.context.store);

        componentWillMount() {
            const { injectReducer } = this.injectors;
            injectReducer(key, reducer);
        }

        componentWillUnmount() {
            if (!keepStateAlive) {
                this.context.store.dispatch({ type: RESET_SUB_STATE, key });
            }
        }

        render() {
            return <WrapperComponent {...this.props} />;
        }
    }

    return hoisNonReactStatics<IP, any>(ReducerInjector, WrapperComponent);
};
