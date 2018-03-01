let express = require('express');
let app = express();

app.use(express.static(__dirname + '/www'));
let server = app.listen(process.env.PORT || 8082, function () {
  let port = server.address().port;
  console.log(`Server running at port ${port}`);
});

let io = require('socket.io')(server);

io.on('connection', function(socket) {
  console.log(`socket connected: ${socket.id}`);
  //socket.emit('msg', `welcome, ${socket.id}`);
});
