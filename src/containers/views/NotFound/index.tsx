import * as React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import * as styles from './style.scss'

import * as Logo from 'assets/images/logo404.png'

class NotFound extends React.Component {
    public render() {
        return (
            <div className={styles.pageContainer}>
                <img className={styles.leftWrapper} src={Logo} alt=""/>
                <div>
                    <h2 className={styles.pageTitle}>404</h2>
                    <p className={styles.pageDescription}>抱歉，你访问的页面不存在</p>
                </div>
            </div>
        )
    }
 }

 export function mapDispatchToProps(dispatch) {
    return {};
}

export function mapStateToProps(state) {
    return {}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(NotFound);
