const app = require('./../app');
const createWebSocketServer = require('./websocket');

const port = process.env.PORT || 80;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

createWebSocketServer(server);
