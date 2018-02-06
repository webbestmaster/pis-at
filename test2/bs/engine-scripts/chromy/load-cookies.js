const fs = require('fs'); // eslint-disable-line id-length

module.exports = (chromy, scenario) => {
    if (!scenario.cookies) {
        return;
    }

    const cookies = JSON.parse(fs.readFileSync(scenario.cookies)); // eslint-disable-line no-sync

    chromy.setCookie(cookies);
    console.log('Cookie state restored with:', JSON.stringify(cookies, null, 2));
};
