
const express = require("express");
const socket = require("socket.io");
var server = require('http').Server(app);
var app = express();
var server = app.listen(4000, function () {
  console.log("Listening to Port 4000");
});


app.use(express.static("public"));

var upgradedServer = socket(server);
var server = require('http').Server(app);
upgradedServer.on("connection", function (socket) {
  socket.on("sendingMessage", function (data) {
    upgradedServer.emit("broadcastMessage", data);
  });

  console.log("Websocket Connected", socket.id);
});
