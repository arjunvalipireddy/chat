const express = require("express");
const socket = require("socket.io");
var io      =     require("socket.io")(http);
var io = require('socket.io').listen(server);

var app = express();
var http = require('http');

var server = app.listen(4000, function () {
  console.log("Listening to Port 4000");
});

app.use(express.static("public"));

var upgradedServer = socket(server);

upgradedServer.on("connection", function (socket) {
  socket.on("sendingMessage", function (data) {
    upgradedServer.emit("broadcastMessage", data);
  });

  console.log("Websocket Connected", socket.id);
});
