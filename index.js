const express = require("express");
var app = express();
const socket = require("socket.io");


var server = require('http').Server(app);
const io = moudle.exports.io = require('socket.io')(server);
const PORT = process.env.PORT || 3231;


app.use(express.static("public"));

var upgradedServer = socket(server);

upgradedServer.on("connection", function (socket) {
  socket.on("sendingMessage", function (data) {
    upgradedServer.emit("broadcastMessage", data);
  });

  console.log("Websocket Connected", socket.id);
});
