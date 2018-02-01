const backstop = require('backstopjs');
const mainConfig = require('./config/main');

const runType = 'reference'; // test || reference
// const runType = 'test'; // test || reference

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
