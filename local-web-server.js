// https://maku77.github.io/nodejs/express/static-file.html
const express = require('express'),
      app     = express();

app.set('port', process.env.PORT || 8022);

app.use( function( req, res, next ){
    console.log( req.path );
    res.sendFile( __dirname + '/docs' + req.path );
} );

app.listen( app.get( 'port' ), function(){
    console.log( 'Listening on port ' + app.get( 'port' ) );
});