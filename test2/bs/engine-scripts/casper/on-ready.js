module.exports = function onReady(casper, scenario, vp) { // eslint-disable-line id-length
    console.log('SCENARIO > ' + scenario.label);
    require('./action-helper')(casper, scenario);
    // add more ready handlers here...
};
