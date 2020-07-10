const ws = require('ws');
const subscribeServerEvents = require('./server-events');


module.exports = (server) => {
  const wss = new ws.Server({
    server: server,
    path: '/socket',
  });

  subscribeServerEvents(wss);
};