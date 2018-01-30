const backstop = require('backstopjs');
// const configPx320 = require('./config/px-320');
// const configPx750 = require('./config/px-760');
const configPx1280 = require('./config/px-1280/index.js');
const {makeConfig} = require('./util');

const runType = 'reference'; // test || reference
// const runType = 'test'; // test || reference

let chain = Promise.resolve();

[
    // configPx320,
    // configPx750,
    configPx1280
]
    .forEach(config => {
        chain = chain
            .then(() => {
                console.log(JSON.stringify(makeConfig(config), 10));

                return backstop(runType, {config: makeConfig(config)});
            })
            .catch(evt => console.error(evt))
            .then(() => console.log('--->', config.id, '- done'));
    });

chain.then(() => console.log('BackStopJS => done'));
