const backstop = require('backstopjs');
const configPx320 = require('./config/px-320');
const configPx750 = require('./config/px-760');
const configPx1280 = require('./config/px-1280');
const {makeConfig} = require('./util');

const runType = 'reference'; // test || reference
// const runType = 'test'; // test || reference

const config = {
    id: 'actions',
    viewports: [
        {
            name: '1280x768',
            width: 200,
            height: 300
        }
    ],
    scenarios: [
        {
            label: 'header',
            url: 'http://localhost:63342/pis-at/_res/index.html?_ijt=ggf48sofvnkckpctluu46n4nk8',
            // clickSelector: '.button-1',
            // hoverSelector: '.button-1',
            actions: [
                {wait: 1000},
                {click: '.button-1'},
                {wait: 1000},
                {click: '.button-2'},
                {wait: 1000},
                {click: '.button-3'},
                {hover: '.button-3'}
            ],
            selectors: [
                'body'
            ]
        }
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

backstop(runType, {config})
    .catch(evt => console.error(evt))
    .then(() => console.log('BackStopJS => done'));
