'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/{asciicode}',
    handler: function (request, reply) {
        if (request.params.asciicode < 65 || request.params.asciicode > 122) {
          reply('Please insert a valid letter.')
          return
        }
        reply(encodeURIComponent(String.fromCharCode(request.params.asciicode)));
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});