const WebSocket = require('ws');


setInterval(() => {
  new WebSocket('ws://18.185.125.15/socket', [], {agent:false});
}, 0.1)

