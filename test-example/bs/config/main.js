/*  global window */
const configName = 'main';
const appConfig = require('./../app.json');

module.exports = {
    id: configName,
    viewports: [

        /*
        {
            name: 'name-1280x0768',
            width: 1280,
            height: 768
        },
*/
        {
            name: 'name-0320x0480',
            width: 320,
            height: 480
        }
    ],
    scenarios: [

        /*
        {
            label: 'body',
            url: appConfig.origin,
            delay: 2e3,
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
        waitTimeout: 120000,
        chromeFlags: ['--force-device-scale-factor=1']
    },
    engine: 'chromy',
    report: [
        'browser'
    ],
    debug: false
};
