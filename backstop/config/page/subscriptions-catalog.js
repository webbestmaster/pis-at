const appConfig = require('./../app-const.json');

const scenarios = [
    {
        label: 'subscriptions-catalog',
        url: appConfig.url.host + appConfig.url.subscriptions,
        delay: 1e3,
        selectors: [
            '.header-menu-simple-wrapper',
            '.top-big-banner',
            '.clubs-catalog-sort',
            '.clubs-catalog-filter',
            // '.clubs-catalog-search',
            '.clubs-catalog-list-item'
        ]
    },
    {
        label: 'subscriptions-catalog--open-mobile-menu',
        url: appConfig.url.host + appConfig.url.subscriptions,
        delay: 1e3,
        clickSelector: '.header-mobile-menu__menu-button',
        selectors: [
            '.header-menu-simple-wrapper',
            '.top-big-banner',
            '.clubs-catalog-sort',
            '.clubs-catalog-filter',
            // '.clubs-catalog-search',
            '.clubs-catalog-list-item'
        ]
    },
    {
        label: 'subscriptions-catalog--open-mobile-filter',
        url: appConfig.url.host + appConfig.url.subscriptions,
        delay: 1e3,
        clickSelector: '.clubs-catalog-sort__open-filter',
        selectors: [
            '.header-menu-simple-wrapper',
            '.top-big-banner',
            '.clubs-catalog-sort',
            '.clubs-catalog-filter',
            // '.clubs-catalog-search',
            '.clubs-catalog-list-item'
        ]
    }
];

module.exports.scenarios = scenarios;
