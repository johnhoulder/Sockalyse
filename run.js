var net = require('net');
net.createServer(function (socket) {
  socket.on("data", function (data) {
    console.log(data);
  });
}).listen(1337, "0.0.0.0"); //Change 1337 to the desired port. 0.0.0.0 = bind to all addresses.