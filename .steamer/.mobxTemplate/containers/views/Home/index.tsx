import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { computed } from 'mobx'

import * as styles from './style.scss'

interface IP {
    globalStore: IGlobalStore.GlobalStore
    routingStore: RouterStore
}

@inject('globalStore', 'routingStore')
@observer
class Home extends React.Component<IP> {
    @computed
    get hello() {
        const { test } = this.props.globalStore
        return test ? test.hello : ''
    }

    routingTest = () => {
        this.props.routingStore.push('/error')
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                {this.hello}
                <a href="javascript: void(0);" onClick={this.routingTest} />
            </div>
        )
    }
}

export default Home
