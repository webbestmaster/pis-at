const backstop = require('backstopjs');
const mainConfig = require('./config/main');

// runType:string = test | reference
const runType = process.env.RUN_TYPE; // eslint-disable-line no-process-env, no-undef
// const runType = 'test'; // test || reference

if (!runType) {
    console.error('You must specify RUN_TYPE (test || reference)');
    return;
}

let chain = Promise.resolve();

[
    mainConfig
]
    .forEach(config => {
        chain = chain
            .then(() => {
                return backstop(runType, {config});
            })
            .catch(evt => console.error(evt))
            .then(() => console.log('--->', config.id, '- done'));
    });

chain.then(() => console.log('BackStopJS => done'));
