module.exports = function (env) {
    const isDev = env.NODE_ENV !== "production";

    console.log(`Compiling${isDev ? " (dev)" : ""}`)

    const conf = isDev ?
        require("./webpack/webpack.dev.js") :
        require("./webpack/webpack.prod.js");

    console.log(conf);
    return conf;
};
