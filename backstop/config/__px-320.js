const {mobileMenu} = require('./scenarios/main');

module.exports = {
    id: 'pis-bsat-px-320',
    viewports: [
        {
            name: '320x480',
            width: 320,
            height: 480
        }
    ],
    scenarios: [
        ...mobileMenu
    ]
};
