


## 使用

- 确保你本地已经成功全局安装 `steamerjs`和 `steamer-plugin-ykit` 两个包

    ``` shell
    $ npm i -g steamerjs@latest steamer-plugin-ykit@latest
    ```

        注意： 这个教授叫依赖的steamerjs和steamer-plugin-ykit版本>=3.0.0

- 安装脚手架

    ``` shell
    $ str ykit --add https://github.com/YDJ-FE/steamer-react-redux-ts.git

- 创建项目

    ``` shell
    $ str ykit 
    # 选择脚手架，版本，按引导一步一步输入项目信息

    # 创建完成后，部分文件可能根据实际情况修改一些配置信息，
    # 比如qshell.*.json, package.json, config/project.js等等
    ```

- 更新脚手架

    ``` shell
    $ str ykit -u --global
    ```
-更新脚手架到项目
   ``` shell
   # cd 到你项目根目录
   $ str ykit -u
   ``` 



## File Tree

[click here](./tree.md)


## css 

default as _css-module_ with _scss_

your can also use any lanuage if you like, e.g. `less`, `stylus`, also with `styled-components`, `scss-bem`

[details](./css.md)

## js

only support typescript

[details](./js.md)

## state manager

default as redux

it will be support mobx a few days later

[details](./store.md)



