const ws = require('ws');
const url = require('url');
const subscribeServerEvents = require('./server-events');


module.exports = (server) => {
  const wss = new ws.Server({
    server: server,
    path: '/socket',
    verifyClient: async function(info, done) {
      const query = url.parse(info.req.url, true).query;
      const ticket = query.ticket;
      if (ticket) {
        info.req.ticket = ticket;
        return done(true);
      } else {
        return done(false, 403, "Ticket not specified");
      }
    }
  });

  subscribeServerEvents(wss);
};