module.exports = {
    files: [
        "config",
        "src",
        "tools",
        "typings",
        ".gitignore",
        ".npmrc",
        ".stylelintignore",
        ".stylelintrc.js",
        "package.json",
        "postcss.config.js",
        "qshell.json",
        "qshell.prod.json",
        "README.md",
        "tsconfig.json",
        "tslint.json"
    ],
    options: [
        {
            type: 'input',
            name: 'webserver',
            message: 'html url(//localhost:9000/)',
            default: "//localhost:9000/",
        },
        {
            type: 'input',
            name: 'cdn',
            message: 'common cdn url(//ss.yidejia.com/)',
            default: "//ss.yidejia.com/",
        },
        {
            type: 'input',
            name: 'port',
            message: 'development server port(9000)',
            default: '9000',
        }
    ]
};