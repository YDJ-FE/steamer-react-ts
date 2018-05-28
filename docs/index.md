
## 使用

- 确保你本地已经成功全局安装 `steamerjs`和 `steamer-plugin-ykit` 两个包

    ``` shell
    $ npm i -g steamerjs@latest steamer-plugin-ykit@latest
    ```

        注意： 这个脚手架依赖的steamerjs和steamer-plugin-ykit版本>=3.0.0

- 安装脚手架

    ``` shell
    $ str ykit --add https://github.com/YDJ-FE/steamer-react-redux-ts.git

- 创建项目

    ``` shell
    $ str ykit 
    # 选择脚手架, 版本，按引导一步一步输入项目信息

    # 创建完成后，部分文件可能根据实际情况修改一些配置信息，
    # 比如qshell.*.json, package.json, config/project.js等等
    ```

- 更新脚手架

    ``` shell
    $ str ykit -u --global
    ```
-更新脚手架到项目
   ``` shell
   # cd 到你项目根目录
   $ str ykit -u
   ``` 



## 文件目录

[点击跳转](./tree.md)


## css 

默认使用_css-module_ 和 _scss_

你也可以使用你喜欢的预处理语言和模块化方式, e.g. `less`, `stylus`, 又或者`styled-components`, `scss-bem`

[详情点击](./css.md)

## js

目前仅支持typescript,如果需要js，推荐[steamer-react](https://github.com/steamerjs/steamer-react)官方脚手架

[详情点击](./js.md)

## 状态管理

默认使用redux

未来可能会支持mobx选择

[详情点击](./store.md)



