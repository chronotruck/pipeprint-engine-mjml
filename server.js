// Require the framework and instantiate it
const fastify = require('fastify')();
const mjml2html = require('mjml').mjml2html;

process.on('SIGINT', function() {
    process.exit();
});

fastify.post('/render', function (request, reply) {
    let template = request.body.files[request.body.template];

    reply
        .code(200)
        .type('text/plain')
        .send(
            mjml2html(template).html
        );
});

// Run the server!
fastify.listen(80, function (err) {
    if (err) throw err;
    console.log(`server listening on ${fastify.server.address().port}`)
});