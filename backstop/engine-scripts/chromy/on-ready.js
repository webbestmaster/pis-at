module.exports = (chromy, scenario, vp) => { // eslint-disable-line id-length
    console.log('SCENARIO > ' + scenario.label);
    require('./click-n-hover-helper')(chromy, scenario);
    // add more ready handlers here...
};
