let hostName = window.location.hostname;
let socket = io.connect(hostName);

socket.on('msg', function(msg){
  console.log(msg);
});
