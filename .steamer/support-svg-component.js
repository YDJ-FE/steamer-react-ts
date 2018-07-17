const path = require('path')

const svgModifiedPath = path.join(__dirname, '.svgModified')

module.exports = function(folderPath) {
    // 修改fileRules(添加svg loader)
    const fileRulesPath = path.join(folderPath, 'tools/rules/fileRules.js')
    this.fs.copySync(
        path.join(svgModifiedPath, 'tools/rules/fileRules.js'),
        fileRulesPath
    )

    // 修改入口scss
    const scssPath = path.join(folderPath, 'src/app.scss')
    this.fs.copySync(path.join(svgModifiedPath, 'src/app.scss'), scssPath)

    // 添加svg typing
    const svgTypingPath = path.join(folderPath, 'typings/svg.d.ts')
    this.fs.copySync(
        path.join(svgModifiedPath, 'typings/svg.d.ts'),
        svgTypingPath
    )
}
