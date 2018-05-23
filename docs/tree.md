# File Tree
``` javascript
.
├── .steamer
│   └── steamer-plugin-kit.js  // 脚本配置
├── .stylelintignore           // stylelint配置
├── .stylelintrc.js            // stylelint配置
├── README.md                  // 项目说明
├── config                     // 项目配置
│   ├── project.js             // 构建相关配置
│   └── steamer.config.js      // steamer相关配置
├── package.json
├── postcss.config.js          // postcss配置
├── qshell.qa.json             // 测试环境qshell配置，创建项目后需要修改
├── qshell.prod.json           // 生产环境配置， 创建项目后需要修改
├── src
│   ├── app.scss               // 公共样式
│   ├── app.tsx                // 入口
│   ├── assets                 // 多媒体资源
│   │   ├── images/
│   │   └── svgs/
│   ├── components/            // 展示组件
│   ├── configureStore.ts      // redux store 配置
│   ├── containers             // 容器组件
│   │   ├── shared             // 可共享容器组件
│   │   └── views              // 页面
│   ├── env                    // 环境配置
│   │   ├── dev.ts
│   │   ├── prod.ts
│   │   └── qa.ts
│   ├── libs                   // 不编译的第三方库
│   │   ├── preact.js
│   │   ├── react-dom.js
│   │   └── react.js
│   ├── main.html              // 页面模板
│   ├── reducers.ts            // reducer入口
│   ├── services               // api服务
│   │   ├── api.ts
│   │   └── contants.ts
│   ├── styles                 // scss能力库
│   │   ├── _base.scss
│   │   ├── _functions.scss
│   │   ├── _mixins.scss
│   │   └── _var.scss
│   └── util                   // 工具
│       ├── constants.ts
│       ├── http.ts
│       ├── reducerInjectors.ts
│       └── sagaInjectors.ts
├── tools                      // 构建相关工具和配置
│   ├── feature                // TODO
│   ├── optimization           // 优化相关
│   ├── plugins                // 插件相关
│   │   ├── basePlugins.js
│   │   ├── cachePlugins.js
│   │   ├── resourcePlugins.js
│   │   └── spritePlugins.js
│   ├── rules                  // loader相关
│   │   ├── fileRules.js
│   │   ├── htmlRules.js
│   │   ├── jsRules.js
│   │   └── styleRules.js
│   ├── script.js              // 构建启动脚本
│   ├── server.js              // 开发服务器
│   ├── template               // 脚手架代码模板
│   │   ├── dependency.js
│   │   └── viewTemplate
│   └── webpack.base.js
├── tsconfig.json              // tsconfig
├── tslint.json                // tslint配置
└──  typings                   // ts类型声明
```
