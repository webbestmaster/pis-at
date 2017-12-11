const appConfig = require('./../../app');
const homeBannerSelectorList = [
    '.slider-navigation-item--right',
    '.slider-navigation-item--left',
    '.slider-navigation-item--center'
];

const clickBannerClickScenarioList = homeBannerSelectorList.map(selector => ({
    label: selector + '_click',
    url: appConfig.origin,
    clickSelector: selector,
    postInteractionWait: 1e3,
    selectors: [
        '.header'
    ]
}));

const clickBannerHoverScenarioList = homeBannerSelectorList.map(selector => ({
    label: selector + '_hover',
    url: appConfig.origin,
    hoverSelector: selector,
    postInteractionWait: 1e3,
    selectors: [
        '.header'
    ]
}));

const mainScenarios = [
    ...clickBannerClickScenarioList,
    ...clickBannerHoverScenarioList,
    {
        label: 'footer',
        url: appConfig.origin,
        selectors: [
            '.footer'
        ]
    }
];

module.exports.mainScenarios = mainScenarios;

module.exports.mobileMenu = [
    {
        label: 'header-mobile',
        url: appConfig.origin,
        selectors: [
            '.header.header--mobile'
        ]
    },
    {
        label: 'header-mobile-open-menu',
        url: appConfig.origin,
        readySelector: '.header-mobile-menu__menu-button',
        clickSelector: '.header-mobile-menu__menu-button',
        selectors: [
            '.header.header--mobile'
        ]
    }
];
