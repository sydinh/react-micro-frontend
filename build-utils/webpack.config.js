const webpackMerge = require('webpack-merge');

module.exports = function ({ env, micro, addon }) {
    const envConfig = require(`./webpack.${env}.js`);
    const commonConfig = require('./webpack.common.js')(micro);

    return webpackMerge(commonConfig, envConfig, ...getAddons(addon));
};

function getAddons(addonsArgs) {
    const addons = Array.isArray(addonsArgs) ? addonsArgs : [addonsArgs];

    return addons
        .filter(Boolean)
        .map((name) => require(`./addons/webpack.${name}.js`));
}
