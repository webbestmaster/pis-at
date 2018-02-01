module.exports = (chromy, scenario, vp) => { // eslint-disable-line id-length
    // require('./loadCookies')(chromy, scenario);

    // IGNORE ANY CERT WARNINGS
    chromy.ignoreCertificateErrors();
};
