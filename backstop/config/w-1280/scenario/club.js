const appConfig = require('./../../app-const.json');
const clubId = '/1';

module.exports = [
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
    }
];
