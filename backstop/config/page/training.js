const appConfig = require('./../app-const.json');
const trainingId = '/1';

const scenarios = [
    {
        label: 'training',
        url: appConfig.url.host + appConfig.url.training + trainingId,
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
        label: 'training--open-mobile-menu',
        url: appConfig.url.host + appConfig.url.training + trainingId,
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
