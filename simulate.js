const WebSocket = require('ws');

//ws://18.185.125.15/socket?ticket=1
let i = 1;


setInterval(() => {
  const ws = new WebSocket('ws://18.185.125.15/socket?ticket='+i, [], {agent:false});
  i++;
  ws.on('error', (val) => {
    console.log(val)
  })
  ws.on('message', (val) => {
    console.log(val)
  })
}, 0.1)

