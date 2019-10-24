module.exports = {
    module: {
        rules: [
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.(css|scss)$/, loader: ['style-loader', 'css-loader'] },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(ttf|eot|svg|gif|png|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'url-loader'
                }]
            },
        ],
    }
}