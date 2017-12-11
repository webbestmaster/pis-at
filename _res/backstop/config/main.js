const {mainScenarios} = require('./scenarios/main');
const {home} = require('./scenarios/home');

module.exports = {
    id: 'PIS-BSAT-main',
    viewports: [],
    scenarios: [
        ...mainScenarios,
        ...home
    ],
    onBeforeScript: 'chromy/on-before.js',
    onReadyScript: 'chromy/on-ready.js',
    paths: {
        bitmaps_reference: 'bitmap/reference', // eslint-disable-line camelcase, id-match
        bitmaps_test: 'bitmap/test', // eslint-disable-line camelcase, id-match
        html_report: 'report/html', // eslint-disable-line camelcase, id-match
        ci_report: 'report/ci', // eslint-disable-line camelcase, id-match
        engine_scripts: 'engine-scripts' // eslint-disable-line camelcase, id-match
    },
    casperFlags: [],
    engine: 'chromy',
    report: [
        'browser'
    ],
    debug: false
};
