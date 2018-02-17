const appConfig = require('./../app-const.json');

const scenarios = [
    {
        label: 'home',
        url: appConfig.url.host + appConfig.url.home,
        delay: 1e3,
        selectors: [
            '.header',
            '.section.sale',
            '.section.promo-steps',
            '.section.our-partners',
            '.promo-instagram',
            '.footer'
        ]
    },
    {
        label: 'home--open-mobile-menu',
        url: appConfig.url.host + appConfig.url.home,
        delay: 1e3,
        clickSelector: '.header-mobile-menu__menu-button',
        selectors: [
            '.header',
            '.section.sale',
            '.section.promo-steps',
            '.section.our-partners',
            '.promo-instagram',
            '.footer'
        ]
    }
];

module.exports.scenarios = scenarios;
