const appConfig = require('./../app');

module.exports = {
    id: 'pis-bsat-px-1280',
    viewports: [
        {
            name: '1280x768',
            width: 1280,
            height: 768
        }
    ],
    scenarios: [
        {
            label: 'header',
            url: appConfig.origin,
            selectors: [
                '.header'
            ]
        }
    ]
};
