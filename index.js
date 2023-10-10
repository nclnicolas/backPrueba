const server = require('./src/server/index');

const port = 8080;

server.listen(port, () => console.log(`Ejecutandose en http://localhost:${port}`))
