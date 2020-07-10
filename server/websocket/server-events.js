const subscribeSocketEvents = require('./socket-events');


module.exports = (wss) => {
  wss.on('connection', (ws, req) => {
    console.log('connected');
    subscribeSocketEvents(ws);
  });

  wss.on('close', () => {
    console.info(`Websocket server was closed`)
  });

  wss.on('error', error => {
    console.error(`Websocket server fired error: ${error}`);
  });
};