const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.join(__dirname, "../src"),
    target: "web",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: {
            "@Components/Social$": path.resolve(__dirname, "../src/Components/Exports/Social"),
            "@Icons$": path.resolve(__dirname, "../src/Icons"),
            "@Silicon$": path.resolve(__dirname, "../src/Silicon"),
            "@Components": path.resolve(__dirname, "../src/Components/"),
            "@Static": path.resolve(__dirname, "../src/Static/"),
            "@Util": path.resolve(__dirname, "../src/Util/")
        }
    },
    entry: {
        "Silicon": "./Silicon.tsx"
    },
    // externals: {
    //     react: "React",
    //     "react-dom": "ReactDOM",
    //     "react-router-dom": "ReactRouterDOM"
    // },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     use: [
            //         "style-loader",
            //         "css-loader"
            //     ]
            // },
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: "Static/index.html",
            cache: true
        })
    ]
};