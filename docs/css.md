# CSS

以下所有支持方案皆带postcss能力，具体配置可根据需要修改项目根目录下的`postcss.config.js`

## scss + css-module

脚手架默认使用的样式方案。

采用scss作为预编译语言，搭配css-module的模块化方案。 

`src/styles`目录下的所有scss文件皆是公用的scss能力，不推荐这里编写实际的样式，避免产生大量重复的css样式输出。

全局基础样式可在`src/app.scss`下面编写。

在css-module方案下，所有组件的样式的class命名都可以用简单易懂的单词进行描述。关于cssModule的介绍，可[点击前往](https://github.com/css-modules/css-modules)

如果需要复写第三方className， 可在嵌套的指定位置声明

```scss
//... 
:global {
    .exitsClassName {
        // ...
    }
}

//...
```


## styled-component

TODO: 待完善


## less

TODO: 待完善
