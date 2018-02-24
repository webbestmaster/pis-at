const appConfig = require('./../../app-const.json');

module.exports = [
    {
        label: 'subscriptions-catalog',
        url: appConfig.url.host + appConfig.url.subscriptions,
        delay: 1e3,
        selectors: [
            '.header-menu-simple-wrapper',
            '.top-big-banner',
            '.clubs-catalog-sort',
            '.clubs-catalog-filter',
            '.clubs-catalog-list-item'
        ]
    }
];
