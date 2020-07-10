const subscribeSocketEvents = require('./socket-events');
const clients = [];


module.exports = (wss) => {
  wss.on('connection', (ws, req) => {
    clients.push(clients.length)        
    console.log('connected, ' + clients.length);
    subscribeSocketEvents(ws);
  });

  wss.on('close', () => {
    console.info(`Websocket server was closed`)
  });

  wss.on('error', error => {
    console.error(`Websocket server fired error: ${error}`);
  });
};