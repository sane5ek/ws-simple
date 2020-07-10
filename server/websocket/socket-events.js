module.exports = (ws) => {
  ws.on('open', () => {
    console.log('Websocket is opened');
  });

  ws.on('message', data => {
    console.log('New message: ' + data);
    ws.send(data);
  });

  ws.on('error', error => {
    console.error(`Websocket connection fired error: ${error}`)
  });

  ws.on('close', () => {
    console.log('Websocket closed');
  });
};