const {mobileMenu} = require('./scenarios/main');

module.exports = {
    id: 'pis-bsat-px-760',
    viewports: [
        {
            name: '760x600',
            width: 760,
            height: 600
        }
    ],
    scenarios: [
        ...mobileMenu
    ]
};
