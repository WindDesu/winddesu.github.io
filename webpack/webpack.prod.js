const path = require("path");
const HtmlExternalsPlugin = require("html-webpack-externals-plugin");
const common = require("./webpack.common.js");

module.exports = {
    ...common,
    devtool: "none",
    mode: "production",
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "[name].[hash].js"
    },
    // plugins: [
    //     ...common.plugins,
    //     new HtmlExternalsPlugin({
    //         cwpOptions: { context: path.join(__dirname, "../node_modules") },
    //         externals: [
    //             {
    //                 module: "react",
    //                 global: "React",
    //                 entry: "umd/react.production.min.js"
    //             },
    //             {
    //                 module: "react-dom",
    //                 global: "ReactDOM",
    //                 entry: "umd/react-dom.production.min.js"
    //             },
    //             // {
    //             //     module: "react-router-dom",
    //             //     global: "ReactRouterDOM",
    //             //     entry: "umd/react-router-dom.min.js"
    //             // }
    //         ]
    //     })
    // ]
};