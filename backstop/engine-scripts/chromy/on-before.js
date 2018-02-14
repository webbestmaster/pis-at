module.exports = (chromy, scenario, vp) => { // eslint-disable-line id-length
    require('./load-cookies')(chromy, scenario);

    // IGNORE ANY CERT WARNINGS
    chromy.ignoreCertificateErrors();
};
