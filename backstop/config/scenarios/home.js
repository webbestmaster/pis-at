const appConfig = require('./../../app');

module.exports.home = [
    {
        label: 'home',
        url: appConfig.origin,
        selectors: [
            '.section.sale',
            '.section.promo-steps',
            '.section.hug.our-partners',
            '.promo-instagram'
        ]
    }
];
