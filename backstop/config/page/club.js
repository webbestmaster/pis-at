const appConfig = require('./../app-const.json');
const clubId = '/1';

const scenarios = [
    {
        label: 'club',
        url: appConfig.url.host + appConfig.url.club + clubId,
        delay: 1e3,
        selectors: [
            '.header-menu-simple-wrapper',
            '.top-big-banner',
            '.swiper-container',
            '.react-tabs__tab-panel > div > div'
        ],
        selectorExpansion: true
    },
    {
        label: 'club--open-mobile-menu',
        url: appConfig.url.host + appConfig.url.club + clubId,
        delay: 1e3,
        clickSelector: '.header-mobile-menu__menu-button',
        selectors: [
            '.header-menu-simple-wrapper',
            '.top-big-banner',
            '.swiper-container',
            '.react-tabs__tab-panel > div > div'
        ],
        selectorExpansion: true
    }
];

module.exports.scenarios = scenarios;
