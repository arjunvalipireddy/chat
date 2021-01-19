const express = require("express");
const socket = require("socket.io");

var app = express();

var server = app.listen((process.env.PORT || 5500), function () {
  console.log("Listening to Port 5500");
});

app.use(express.static("public"));

var upgradedServer = socket(server);

upgradedServer.on("connection", function (socket) {
  socket.on("sendingMessage", function (data) {
    upgradedServer.emit("broadcastMessage", data);
  });

  console.log("Websocket Connected", socket.id);
});
