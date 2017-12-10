const mainConfig = require('./config/main');

module.exports.makeConfig = config => {
    const newConfig = JSON.parse(JSON.stringify(mainConfig));

    Object.keys(config).forEach(key => {
        const value = config[key];

        if (typeof value === 'string') {
            Object.assign(newConfig, {[key]: value});
        }

        if (value instanceof Array) {
            Object.assign(newConfig, {[key]: value.concat(newConfig[key])});
        }
    });

    newConfig.paths.bitmaps_reference += '_' + config.id.toLowerCase(); // eslint-disable-line camelcase, id-match

    return newConfig;
};
