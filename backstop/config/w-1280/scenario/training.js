const appConfig = require('./../../app-const.json');
const trainingId = '/1';

module.exports = [
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
    }
];
