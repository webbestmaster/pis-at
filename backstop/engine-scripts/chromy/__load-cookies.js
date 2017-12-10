const fs = require('fs'); // eslint-disable-line id-length

module.exports = (chromy, scenario) => {
    let cookies = [];
    const cookiePath = scenario.cookiePath;

    // READ COOKIES FROM FILE IF EXISTS
    if (fs.existsSync(cookiePath)) { // eslint-disable-line no-sync
        cookies = JSON.parse(fs.readFileSync(cookiePath)); // eslint-disable-line no-sync
    }

    // MUNGE COOKIE DOMAIN FOR CHROMY USAGE
    cookies = cookies.map(cookie => { // eslint-disable-line no-param-reassign
        cookie.url = 'https://' + cookie.domain; // eslint-disable-line no-param-reassign
        delete cookie.domain; // eslint-disable-line prefer-reflect, no-param-reassign
        return cookie;
    });

    // SET COOKIES VIA CHROMY
    chromy.setCookie(cookies);
    console.log('Cookie state restored with:', JSON.stringify(cookies, null, 2));
};
