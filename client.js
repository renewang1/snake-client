const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', (client) => {
    console.log("Connected to server");
    conn.write("Name: RW");
    setInterval(() => {
      conn.write("Move: up")
    }, 50);
  })
  
  conn.on('data', (data) => {
    console.log('Server says', data);
  })

  return conn;
}

module.exports = connect;