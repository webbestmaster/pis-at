/*  global window */
const configName = 'main';
const appConfig = require('./app-const.json');

module.exports = {
    id: configName,
    viewports: [
        {
            name: 'v-1280x_768',
            width: 1280,
            height: 768
        },
        {
            name: 'v-_752x_600',
            width: 752,
            height: 600
        },
        {
            name: 'v-_320x_480',
            width: 320,
            height: 480
        }
    ],
    scenarios: [
        ...require('./page/home').scenarios,
        ...require('./page/clubs-catalog').scenarios,
        ...require('./page/subscriptions-catalog').scenarios,
        ...require('./page/trainings-catalog').scenarios,
        ...require('./page/club').scenarios,
        ...require('./page/subscription').scenarios,
        ...require('./page/training').scenarios


        /*
        {
            label: 'body',
            url: appConfig.origin,
            selectors: [
                'body'
            ]
        },
*/
        /*
        {
            label: 'just-node',
            url: appConfig.origin,
            selectors: [
                '#just-node'
            ]
        },
*/
        /*
        {
            label: 'red-on-hover',
            url: appConfig.origin,
            actions: [
                {wait: 1e3},
                {hover: '#red-on-hover'}
            ],
            selectors: [
                '#red-on-hover'
            ]
        },
*/
        /*
        {
            label: 'green-on-click',
            url: appConfig.origin,
            actions: [
                {wait: 1e3},
                {click: '#green-on-click'}
            ],
            selectors: [
                '#green-on-click'
            ]
        },
*/
        /*
        {
            label: 'not-exists',
            url: appConfig.origin,
            selectors: [
                '#not-exists'
            ]
        },
*/
        /*
        {
            label: 'evaluate',
            url: appConfig.origin,
            actions: [
                {wait: 1e3},
                {
                    evaluate: function hide() {
                        window.document.getElementById('input').style.backgroundColor = '#0c0';
                    }
                },
                {wait: 1e3}
            ],
            selectors: [
                '#input-wrapper'
            ]
        },
*/
        /*
        {
            label: 'cookies',
            url: 'http://localhost:8181/#/user',
            cookies: './config/cookies.json',
            actions: [
                {wait: 1e3}
            ],
            selectors: [
                '.top-big-banner'
            ]
        }
*/
        /*
        {
            label: 'send-keys',
            url: appConfig.origin,
            actions: [
                {insert: '#input', text: 'the insert text'}
            ],
            selectors: [
                '#input-wrapper'
            ]
        }
*/
    ],
    asyncCaptureLimit: 1,
    onBeforeScript: 'chromy/on-before.js',
    onReadyScript: 'chromy/on-ready.js',
    paths: {
        bitmaps_reference: 'bitmap/reference/' + configName, // eslint-disable-line camelcase, id-match
        bitmaps_test: 'bitmap/test/' + configName, // eslint-disable-line camelcase, id-match
        html_report: 'report/html/' + configName, // eslint-disable-line camelcase, id-match
        ci_report: 'report/ci/' + configName, // eslint-disable-line camelcase, id-match
        engine_scripts: 'engine-scripts' // eslint-disable-line camelcase, id-match
    },
    engineOptions: {
        waitTimeout: 5e3,
        chromeFlags: ['--force-device-scale-factor=1']
    },
    engine: 'chromy',
    report: [
        'browser'
    ],
    debug: false
};
