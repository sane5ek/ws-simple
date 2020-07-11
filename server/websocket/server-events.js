const subscribeSocketEvents = require('./socket-events');


const clients = {};

module.exports = (wss) => {
  wss.on('connection', (ws, req) => {
    const oldClient = clients[req.ticket];
    if (oldClient) {
      oldClient.send('Closed because new client with that ticket is arrived');
      oldClient.close();
    }
    clients[req.ticket] = ws;
    subscribeSocketEvents(ws);
    console.log('connected, ', wss.clients.size, ' , ticket: ', req.ticket);
  });

  wss.on('close', () => {
    console.info(`Websocket server was closed`)
  });

  wss.on('error', error => {
    console.error(`Websocket server fired error: ${error}`);
  });
};