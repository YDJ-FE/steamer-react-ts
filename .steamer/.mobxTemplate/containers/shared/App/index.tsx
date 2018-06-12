/**
 *
 * App
 *
 * 这个组件是每个页面的最外层骨架，所以这里的代码只能存放所有页面公有的， 比如（导航）或者路由
 * 切勿在其他组件引用
 */

import * as React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "containers/views/Home";
import NotFoundPage from "containers/views/NotFound";


import * as styles from "./style.scss";

const AppWrapper = props => (
    <div className={styles.appWrapper}>{props.children}</div>
);

export default function App(props) {
    return (
        <AppWrapper>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="*" component={NotFoundPage} />
                {/* <Route path="/features" component={FeaturePage} />
                <Route path="" component={NotFoundPage} /> */}
            </Switch>
        </AppWrapper>
    );
}
