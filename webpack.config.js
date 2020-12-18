const path = require('path');
module.exports = {
    mode: 'development',
    devtool:false,
    entry:'./src/index.js',
    snapshot: {
        managedPaths: [path.resolve(__dirname, 'node_modules')],
    },
    cache:{
        type: 'filesystem'
    },
    module: {
        rules: []
    },
    plugins:[]
}
