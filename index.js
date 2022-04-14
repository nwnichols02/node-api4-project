const server = require('./api/server');

const PORTY = process.env.PORT

const port = 9000;

server.listen(port, () => {
    console.log('server listening on ', port)
})
