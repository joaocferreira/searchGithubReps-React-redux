const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiReactViews = require('hapi-react-views');


require('babel-core/register')({
    presets: ['react', 'es2015']
});

const Server = new Hapi.Server();

Server.connection({
  host: 'localhost',
  port: 8000
});

Server.register([{
  register: Inert
}, {
  register: Vision
}], function(err) {

  if (err) return console.error(err);

    Server.views({
        engines: {
            jsx: HapiReactViews
        },
        relativeTo: __dirname,
        path: './'
    });

    Server.route({
      method: 'GET',
      path: '/public/{params*}',
      handler: {
        directory: {
          path: 'app/public',
          index: ['index.html']
        }
      }
    });

    Server.route({
      method: 'GET',
      path: '/{params*}',
      handler: {
        view: 'index'
      }
    });

    Server.start(function() {
      console.log(' Server started at: ' + Server.info.uri);
    });

});