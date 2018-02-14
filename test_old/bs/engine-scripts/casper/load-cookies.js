const fs = require('fs'); // eslint-disable-line id-length

module.exports = function loadCookies(casper, scenario) {
    if (!scenario.hasOwnProperty('cookiePath')) {
        return;
    }

    let cookies = [];
    const cookiePath = scenario.cookiePath;

    // READ COOKIES FROM FILE IF EXISTS
    if (fs.exists(cookiePath)) {
        cookies = JSON.parse(fs.read(cookiePath));
    }

    casper.page.cookies = cookies; // eslint-disable-line no-param-reassign

    console.log('Cookie state restored with cookies:', JSON.stringify(cookies, null, 2));
    // casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36');
};
