import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
// app.listen(3000, handleListen);

//http server
const server = http.createServer(app);
//websocket server
const wss = new WebSocket.Server({ server });

const sockets = [];

wss.on("connection", (socket) => {
  sockets.push(socket);
  socket["nickname"] = "Anon";
  console.log("Connected to Browser ✅");
  socket.on("close", () => {
    console.log("Disconnected from Browser ❌");
  });
  socket.on("message", (message) => {
    // console.log(message.toString("utf-8"));
    // socket.send(message.toString("utf-8"));
    const parsedMessage = JSON.parse(message);
    switch (parsedMessage.type) {
      case "new_message":
        sockets
          .filter((aSocket) => aSocket !== socket)
          .forEach((aSocket) =>
            aSocket.send(`${socket.nickname}: ${parsedMessage.payload}`)
          );
        socket.send(`You(${socket.nickname}): ${parsedMessage.payload}`);
        break;
      case "nickname":
        socket["nickname"] = parsedMessage.payload;
        break;
    }
  });
  //   socket.send("Hello!");
});

server.listen(3000, handleListen);
