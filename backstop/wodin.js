var Woden = require( 'woden' ),
    woden = new Woden({}),
    DS = {};

woden.when( /katran/, {
    // getKey: function( path, query ) { // allows you to generate keys
    //     return 'foo:' + path;
    // },
    // headers: {
    //     'X-Bar': 'Baz' // set custom headers when sending to proxy
    // },
    // params: {
    //     'apiKey': 'myToken' // set additional url param when sending to proxy
    // },
    // caching: false // don't cache responses from google
    caching: true
});

/*
woden.when( /katran/, {
    cacheTimeout: function( cacheEntry, req, proxyRes ) {
        if ( cacheEntry.body.length > 10000000 ) {
            return -1; // don't cache big responses
        }

        if ( req.url.match( /bar/) ) {
            return 0; // cache bar stuff forever
        }

        if ( proxyRes.statusCode === 404 ) {
            return -1; // don't cache 404 responses
        }

        return 10000; // only cache for 10 seconds
    }
});
*/

/*
woden.store({ // custom storeAdapter
    get: function( key, callback ) {
        console.log('=============');
        console.log('-------------');
        console.log(DS[key]);
        console.log('-------------');
        console.log('=============');
        callback( null, DS[key] ); // getting information
    },
    set: function( key, value, callback, cachetimeMS ) { // setting values to store
        DS[ key ] = value; // value.body is a buffer
        callback( );
    }
});
*/

woden.listen( 9000 ); // listen on port
