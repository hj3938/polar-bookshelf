var path = require('path');

module.exports = {
    mode: 'development',
    target: "electron-renderer",
    entry: {
        electron: './web/js/apps/electron.js',
    },
    output: {
        path: path.resolve(__dirname, 'web/js/apps'),
        filename: '[name]-bundle.js',
        publicPath: '/web/js/apps'
    }

};