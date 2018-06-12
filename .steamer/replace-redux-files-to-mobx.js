const fs = require('fs')
const path = require('path')
const child_process = require('child_process')

const mobxTemplatePath = path.join(__dirname, '.mobxTemplate')

// 删除文件夹
function deleteFolderRecursive(path) {
    if (fs.existsSync(path)) {
        const files = fs.readdirSync(path)
        for (const file of files) {
            const curPath = path + '/' + file
            if (fs.statSync(curPath).isDirectory()) {
                // recurse
                deleteFolderRecursive(curPath)
            } else {
                // delete file
                fs.unlinkSync(curPath)
            }
        }
        fs.rmdirSync(path)
    }
}

// 替换文件
function replaceFile(target, from) {
    const fromContent = fs.readFileSync(from, 'utf8')
    fs.writeFile(target, fromContent, () => {})
}

function preReplaceFolder(target, from) {
    // 先将目标文件夹清空
    deleteFolderRecursive(target)
    replaceFolder(target, from)
}

function replaceFolder(target, from) {
    child_process.spawn('cp', ['-r', from, target])
}

module.exports = function(folderPath) {
    // 删除/修改入口文件中redux相关的模块
    fs.unlinkSync(path.join(folderPath, 'src/configureStore.ts'))
    fs.unlinkSync(path.join(folderPath, 'src/reducers.ts'))
    replaceFile(
        path.join(folderPath, 'src/app.tsx'),
        path.join(mobxTemplatePath, 'app.tsx')
    )

    // 添加store
    preReplaceFolder(
        path.join(folderPath, 'src/store'),
        path.join(mobxTemplatePath, 'store')
    )

    // 删除/修改util中redux相关的模块
    const utilPath = path.join(folderPath, 'src/util')
    fs.unlinkSync(path.join(utilPath, 'reducerInjectors.ts'))
    fs.unlinkSync(path.join(utilPath, 'sagaInjectors.ts'))
    fs.unlinkSync(path.join(utilPath, 'constants.ts'))

    // 删除typings中redux相关的模块
    const typingsPath = path.join(folderPath, 'typings')
    fs.unlinkSync(path.join(typingsPath, 'redux-store.shim.d.ts'))
    fs.unlinkSync(path.join(typingsPath, 'redux.shim.d.ts'))

    // 删除/修改components中redux相关的组件
    const componentsPath = path.join(folderPath, 'src/components')
    deleteFolderRecursive(path.join(componentsPath, 'ReducerInjector'))
    deleteFolderRecursive(path.join(componentsPath, 'SagaInjector'))

    // 删除/修改containers中redux相关的组件
    const containersPath = path.join(folderPath, 'src/containers')
    preReplaceFolder(containersPath, path.join(mobxTemplatePath, 'containers'))
}
