const server = require('./api/server');

const port = 9999;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})