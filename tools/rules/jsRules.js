const path = require('path')

module.exports = function(config) {

    let configWebpack = config.webpack;

    let rules = [
        {
            test: /\.(tsx?|js)$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/,
            options: {
                configFileName: path.join(__dirname, '../../tsconfig.webpack.json')
            }
        }
    ];

    return rules;
};
