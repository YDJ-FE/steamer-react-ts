const path = require('path')

const svgModifiedPath = path.join(__dirname, '.svgModified')

module.exports = function(folderPath) {
    // 修改fileRules(添加svg loader)
    const fileRulesPath = path.join(folderPath, 'tools/rules/fileRules.js')
    this.fs.copySync(path.join(svgModifiedPath, 'fileRules.js'), fileRulesPath)

    // 修改入口scss
    const scssPath = path.join(folderPath, 'src/app.scss')
    this.fs.copySync(path.join(svgModifiedPath, 'app.scss'), scssPath)
}
