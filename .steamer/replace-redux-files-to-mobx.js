const path = require('path')
const fs = require('fs-extra')

const mobxTemplatePath = path.join(__dirname, '.mobxTemplate')

module.exports = function(folderPath) {
    // 删除/修改入口文件中redux相关的模块
    fs.removeSync(path.join(folderPath, 'src/configureStore.ts'))
    fs.removeSync(path.join(folderPath, 'src/reducers.ts'))
    fs.copySync(
        path.join(mobxTemplatePath, 'app.tsx'),
        path.join(folderPath, 'src/app.tsx')
    )

    // 添加store
    fs.copySync(
        path.join(mobxTemplatePath, 'store'),
        path.join(folderPath, 'src/store')
    )

    // 删除/修改util中redux相关的模块
    const utilPath = path.join(folderPath, 'src/util')
    fs.removeSync(path.join(utilPath, 'reducerInjectors.ts'))
    fs.removeSync(path.join(utilPath, 'sagaInjectors.ts'))
    fs.removeSync(path.join(utilPath, 'constants.ts'))

    // 删除typings中redux相关的模块
    const typingsPath = path.join(folderPath, 'typings')
    fs.removeSync(path.join(typingsPath, 'redux-store.shim.d.ts'))
    fs.removeSync(path.join(typingsPath, 'redux.shim.d.ts'))

    // 删除/修改components中redux相关的组件
    const componentsPath = path.join(folderPath, 'src/components')
    fs.removeSync(path.join(componentsPath, 'ReducerInjector/'))
    fs.removeSync(path.join(componentsPath, 'SagaInjector'))

    // 删除/修改containers中redux相关的组件
    const containersPath = path.join(folderPath, 'src/containers')
    fs.emptyDirSync(containersPath)
    fs.copySync(path.join(mobxTemplatePath, 'containers'), containersPath)
}
