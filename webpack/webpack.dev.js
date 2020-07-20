const path = require("path");
const HtmlExternalsPlugin = require("html-webpack-externals-plugin");
const common = require("./webpack.common.js");

module.exports = {
    ...common,
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        port: 3958,
        hot: true,
        open: false
    },
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "[name].js"
    },
    // plugins: [
    //     ...common.plugins,
    //     new HtmlExternalsPlugin({
    //         cwpOptions: { context: path.join(__dirname, "../node_modules") },
    //         externals: [
    //             {
    //                 module: "react",
    //                 global: "React",
    //                 entry: "umd/react.development.js"
    //             },
    //             {
    //                 module: "react-dom",
    //                 global: "ReactDOM",
    //                 entry: "umd/react-dom.development.js"
    //             }
    //             // {
    //             //     module: "react-router-dom",
    //             //     global: "ReactRouterDOM",
    //             //     entry: "umd/react-router-dom.js"
    //             // }
    //         ]
    //     })
    // ],
    devtool: "eval",
    mode: "development"
};