const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");

module.exports = {
    mode: 'development',
    entry: "/src/index.js",
    output: {
        publicPath: "./",
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            inject:'head',
        })
    ],
    devServer: {
        port: 3000,
        onListening: function (server) {
            const port = server.listeningApp.address().port;
            console.log('Listening on port:', port);
        },
        historyApiFallback: true,
        publicPath: "/",
        contentBase: '/dist',
    },

    module: {
        rules : [
            {
                test: /\.js$/,
                exclude: (/node_modules/),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }                
            },
            {
                test: /\.css$/,
                use: 
                    [
                        {loader: 'style-loader'},
                        {loader: 'css-loader'},

                    ]
                
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
              },
              {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
            },
        ]
    }
}