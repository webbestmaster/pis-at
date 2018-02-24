const appConfig = require('./../../app-const.json');

module.exports = [
    {
        label: 'club-catalog',
        url: appConfig.url.host + appConfig.url.clubs,
        delay: 1e3,
        selectors: [
            '.header-menu-simple-wrapper',
            '.top-big-banner',
            '.clubs-catalog-sort',
            '.clubs-catalog-filter',
            '.clubs-catalog-search',
            '.clubs-catalog-list-item'
        ]
    }
];
