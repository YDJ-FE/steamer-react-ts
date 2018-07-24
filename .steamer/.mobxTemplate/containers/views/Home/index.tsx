import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { computed } from 'mobx'

import * as styles from './style.scss'

interface IP {
    globalStore: IGlobalStore.GlobalStore
    routerStore: RouterStore
}

@inject('globalStore', 'routerStore')
@observer
class Home extends React.Component<IP> {
    @computed
    get hello() {
        const { test } = this.props.globalStore
        return test ? test.hello : ''
    }

    routerTest = () => {
        this.props.routerStore.push('/error')
    }

    render() {
        return (
            <div>
                <h1 className={styles.routerTest} onClick={this.routerTest}>
                    Hello World!
                </h1>
                {this.hello}
            </div>
        )
    }
}

export default Home
