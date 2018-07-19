## 环境准备
-  本脚手架依赖`steamerjs`和`steamer-plugin-kit`两个包 

    ```shell
    $ npm i -g steamerjs@latest steamer-plugin-kit@latest
    ```

          注意： 这个脚手架依赖的steamerjs>=3.0.0

## 使用

-   确保环境依赖正确

    ```shell
    $ str --verion
    # 检查版本是否大于3.0.0

    $ str kit --version
    # 检查版本是否大于3.0.0
    ```

    如果没有正确打印版本号，请[前往安装依赖](##环境准备)

-   安装脚手架

    ```shell
    $ str kit --add https://github.com/YDJ-FE/steamer-react-ts
    ```

-   创建项目

    ```shell
    $ str kit
    # 选择脚手架, 版本，按引导一步一步输入项目信息
    ```

-   更新脚手架

    ```shell
    $ str kit -u --global
    ```

-   更新脚手架到项目
    ```shell
    # cd 到你项目根目录
    $ str kit -u
    ```

-  添加模板代码到项目
  
   ```shell
   $ str template
   # 按提示操作
   ```

## 文件目录

[点击跳转](./tree.md)

## css

默认使用*css-module* 和 _scss_

你也可以使用你喜欢的预处理语言和模块化方式, e.g. `less`, `stylus`, 又或者`styled-components`, `scss-bem`

[详情点击](./css.md)

## js

目前仅支持 typescript,如果需要 js，推荐[steamer-react](https://github.com/steamerjs/steamer-react)官方脚手架

[详情点击](./js.md)

## 状态管理

默认使用 redux

支持选择 mobx

[详情点击](./store.md)

## 可选的 svg 支持

使用[@svgr/webpack](https://github.com/smooth-code/svgr/tree/master/packages/webpack)

[使用示例](./svg.md)
