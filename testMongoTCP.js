const net = require('net');

const client = new net.Socket();
let success = false;

client.connect(27017, '127.0.0.1', () => {
  console.log('MongoDB port 27017 is open and listening!');
  success = true;
  client.destroy();
});

client.on('error', (err) => {
  console.log('MongoDB port 27017 is CLOSED.', err.message);
  client.destroy();
});

client.on('close', () => {
  if (success) process.exit(0);
  else process.exit(1);
});
