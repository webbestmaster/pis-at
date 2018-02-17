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
    },
    {
        label: 'club--reviews',
        url: appConfig.url.host + appConfig.url.club + clubId + '/tab-index/1',
        delay: 1e3,
        selectors: [
            '.swiper-container',
            '.section__header.section__header--plus-swiper',
            '.section__header.section__header--plus-swiper + div',
            '.section__header.section__header--plus-swiper ~ p',
            '.section__header.section__header--plus-swiper ~ form'
        ]
    },
    {
        label: 'club--reviews--open-mobile-menu',
        clickSelector: '.header-mobile-menu__menu-button',
        url: appConfig.url.host + appConfig.url.club + clubId + '/tab-index/1',
        delay: 1e3,
        selectors: [
            '.swiper-container',
            '.section__header.section__header--plus-swiper',
            '.section__header.section__header--plus-swiper + div',
            '.section__header.section__header--plus-swiper ~ p',
            '.section__header.section__header--plus-swiper ~ form'
        ]
    },
    {
        label: 'club--photos',
        url: appConfig.url.host + appConfig.url.club + clubId + '/tab-index/5',
        delay: 1e3,
        selectors: [
            '.swiper-container',
            '.react-tabs__tab-panel'
        ]
    },
    {
        label: 'club--photos--open-mobile-menu',
        clickSelector: '.header-mobile-menu__menu-button',
        url: appConfig.url.host + appConfig.url.club + clubId + '/tab-index/5',
        delay: 1e3,
        selectors: [
            '.swiper-container',
            '.react-tabs__tab-panel'
        ]
    }
];

module.exports.scenarios = scenarios;
