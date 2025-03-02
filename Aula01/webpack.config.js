const HtmlwebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve(_dirname, './dist'),
        filename: 'index_bundle.js',
   },
   target: 'web',
   devServer: {
    port: '5000', 
    static: {
        directory: path.join(_dirname, 'public')
    },
    open: true, 
    hot: true, 
    liveReload: true,
   },

   resolve: {
    extensions: ['.js', '.jsx', '.json']
   },
   module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
    }]
   },
   plugins: [
        new HtmlwebpackPlugin({
            template: path.join(_dirname, 'public', 'index.html')
        })
    ]
}