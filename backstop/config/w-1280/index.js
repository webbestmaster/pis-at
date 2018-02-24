/* global window */
const configName = 'w-1280';

module.exports = {
    id: configName,
    viewports: [
        {
            name: 'w-1280x768',
            width: 1280,
            height: 768
        }
    ],
    scenarios: [
        ...require('./scenario/home'),
        ...require('./scenario/clubs-catalog'),
        ...require('./scenario/subscriptions-catalog'),
        ...require('./scenario/trainings-catalog'),
        ...require('./scenario/club'),
        ...require('./scenario/subscription'),
        ...require('./scenario/training')
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
