const path = require('path')

const mobxTemplatePath = path.join(__dirname, '.mobxTemplate')

module.exports = function(folderPath) {
    // 删除/修改入口文件中redux相关的模块
    this.fs.removeSync(path.join(folderPath, 'src/configureStore.ts'))
    this.fs.removeSync(path.join(folderPath, 'src/reducers.ts'))
    this.fs.copySync(
        path.join(mobxTemplatePath, 'app.tsx'),
        path.join(folderPath, 'src/app.tsx')
    )

    // 添加store
    this.fs.copySync(
        path.join(mobxTemplatePath, 'store'),
        path.join(folderPath, 'src/store')
    )

    // 删除/修改util中redux相关的模块
    const utilPath = path.join(folderPath, 'src/util')
    this.fs.removeSync(path.join(utilPath, 'reducerInjectors.ts'))
    this.fs.removeSync(path.join(utilPath, 'sagaInjectors.ts'))
    this.fs.removeSync(path.join(utilPath, 'constants.ts'))

    // 删除typings中redux相关的模块
    const typingsPath = path.join(folderPath, 'typings')
    this.fs.removeSync(path.join(typingsPath, 'redux-store.shim.d.ts'))
    this.fs.removeSync(path.join(typingsPath, 'redux.shim.d.ts'))
    // 添加router.d.ts到typings
    this.fs.copySync(
        path.join(mobxTemplatePath, 'typings/router.d.ts'),
        path.join(typingsPath, 'router.d.ts')
    )

    // 删除/修改components中redux相关的组件
    const componentsPath = path.join(folderPath, 'src/components')
    this.fs.removeSync(path.join(componentsPath, 'ReducerInjector/'))
    this.fs.removeSync(path.join(componentsPath, 'SagaInjector'))

    // 删除/修改containers中redux相关的组件
    const containersPath = path.join(folderPath, 'src/containers')
    this.fs.emptyDirSync(containersPath)
    this.fs.copySync(path.join(mobxTemplatePath, 'containers'), containersPath)
}
