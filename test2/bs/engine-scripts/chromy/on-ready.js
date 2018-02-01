module.exports = (chromy, scenario, vp) => { // eslint-disable-line id-length
    console.log('SCENARIO > ' + scenario.label);
    require('./action-helper')(chromy, scenario);
    // add more ready handlers here...
};
