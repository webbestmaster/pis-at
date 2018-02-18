const appConfig = require('./../app-const.json');
const subscriptionId = '/1';

const scenarios = [
    {
        label: 'subscription',
        url: appConfig.url.host + appConfig.url.subscription + subscriptionId,
        delay: 1e3,
        selectors: [
            '.header-menu-simple-wrapper',
            '.top-big-banner',
            '.swiper-container',
            '.react-tabs__tab-panel > .hug > div'
        ],
        selectorExpansion: true
    },
    {
        label: 'subscription--open-mobile-menu',
        url: appConfig.url.host + appConfig.url.subscription + subscriptionId,
        delay: 1e3,
        clickSelector: '.header-mobile-menu__menu-button',
        selectors: [
            '.header-menu-simple-wrapper',
            '.top-big-banner',
            '.swiper-container',
            '.react-tabs__tab-panel > .hug > div'
        ],
        selectorExpansion: true
    }
];

module.exports.scenarios = scenarios;
