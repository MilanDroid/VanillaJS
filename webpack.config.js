//Nuestro directorio de trabajo
const path = require('path');
// La herramienta que utilizaremos para compilar los HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Plugin para styles
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // Archivo principal
    entry: './src/index.js',
    // A donde se compilaran los archivos JS
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    // El tipo de archivos permitidos
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                // El tipo de archivos que babel transpilara
                test: /\.js?$/,
                // Los archivos que babel ignorara
                exclude: /node_modules/,
                // Para que modulo son estas reglas
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    // Los plugins que usaremos
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            // Donde esta nuestro template principal
            template: './public/index.html',
            // Como y donde se guardara nuestra salida
            filename: './index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: './src/styles/styles.css',
                to: './'
            }]
        })
    ]
}