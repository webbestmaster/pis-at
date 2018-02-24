const appConfig = require('./../../app-const.json');

module.exports = [
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
    }
];
