const appConfig = require('./../../app-const.json');

module.exports = [
    {
        label: 'trainings-catalog',
        url: appConfig.url.host + appConfig.url.trainings,
        delay: 1e3,
        selectors: [
            '.header-menu-simple-wrapper',
            '.top-big-banner',
            '.clubs-catalog-sort',
            '.clubs-catalog-filter',
            '.clubs-catalog-date-filter',
            '.clubs-catalog-list-item'
        ]
    }
];
