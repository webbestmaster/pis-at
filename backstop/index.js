const backstop = require('backstopjs');
const mainConfig = require('./config/main');

// runType:string = test | reference
const runType = process.env.RUN_TYPE; // eslint-disable-line no-process-env, no-undef
const filter = process.env.FILTER || ''; // eslint-disable-line no-process-env, no-undef
// const runType = 'test'; // test || reference

if (!runType) {
    console.error('You must specify RUN_TYPE (test || reference)');
    return;
}

let chain = Promise.resolve();

const {viewports} = mainConfig;

viewports
    .forEach((viewport, ii) => {
        if (ii !== 0) {
            return;
        }

        chain = chain
            .then(() => {
                const newConfig = JSON.parse(JSON.stringify(mainConfig));

                newConfig.id = mainConfig.id + '-' + viewport.name;
                newConfig.viewports = [viewport];

                ['bitmaps_reference', 'bitmaps_test', 'html_report', 'ci_report']
                    .forEach(pathName => Object
                        .assign(newConfig.paths, {[pathName]: newConfig.paths[pathName] + '-' + viewport.name}));

                return backstop(runType, {config: newConfig});
            })
            .catch(evt => console.error(evt))
            .then(() => console.log('--->', viewport.name, '- done'));
    });


/*
[
    mainConfig
]
    .forEach(config => {
        chain = chain
            .then(() => {
                Object.assign(
                    config,
                    {scenarios: config.scenarios.filter(({label}) => label.includes(filter))}
                );

                return backstop(runType, {config});
            })
            .catch(evt => console.error(evt))
            .then(() => console.log('--->', config.id, '- done'));
    });
*/

chain.then(() => console.log('BackStopJS => done'));
