
const __app_env = process.env.APP_ENV || 'dev'
const projectName = 'steamer-react-redux-ts-kit'

module.exports = {
    "webserver": "//localhost:9000/",
    "cdn": `//ss.yidejia.com/${projectName}/dist/${__app_env}/`,
    "port": "9000"
};