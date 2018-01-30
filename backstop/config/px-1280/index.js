/* global document */
const appConfig = require('./../../app.json');

module.exports = {
    id: 'id-px-1280',
    viewports: [
        {
            name: 'name-1280x768',
            width: 1280,
            height: 768
        }
    ],
    scenarios: [
        {
            label: 'search-field',
            url: appConfig.origin,
            // actions: [{click: '#sb_form_q'}, {wait: 5e3}],
            selectors: [
                '#hp_container'
            ]
        },
        {
            label: 'search-field-clicked',
            url: appConfig.origin,
            actions: [
                {click: '#sb_form_q'},
                {wait: 1e3},
                {
                    evaluate: () => {
                        document.activeElement.value = '11';
                        document.activeElement.style.color = '#0c0';
                    }
                },
                {wait: 1e3},
                {
                    hover: '#office'
                },
                {wait: 1e3}
            ],
            selectors: [
                '#hp_container'
            ]
        }
        // {
        //     label: 'hove',
        //     url: appConfig.origin,
        //     selectors: [
        //         '.header'
        //     ]
        // }
    ]
};
