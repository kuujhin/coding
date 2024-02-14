import http from "http";
// import WebSocket from "ws";
import SocketIO from "socket.io";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

function publicRooms() {
  const {
    sockets: {
      adapter: { sids, rooms },
    },
  } = wsServer;
  const publicRooms = [];
  rooms.forEach((_, key) => {
    if (sids.get(key) === undefined) {
      publicRooms.push(key);
    }
  });
  return publicRooms;
}

wsServer.on("connection", (socket) => {
  socket["nickname"] = "Anon";
  wsServer.sockets.emit("room_change", publicRooms());

  socket.onAny((event) => {
    // console.log(wsServer.sockets.adapter);
    console.log(`Socket Event: ${event}`);
  });
  socket.on("enter_room", (roomName, nickName, done) => {
    if (nickName !== "") {
      socket["nickname"] = nickName;
    }
    socket.join(roomName);
    done();
    socket.to(roomName).emit("welcome", socket.nickname);
    wsServer.sockets.emit("room_change", publicRooms());
  });
  socket.on("new_message", (msg, room, done) => {
    socket.to(room).emit("new_message", `${socket.nickname}: ${msg}`);
    done();
  });
  socket.on("left_room", (roomName, done) => {
    socket.leave(roomName);
    socket.to(roomName).emit("bye", socket.nickname);
    socket["nickname"] = "Anon";
    done();
    wsServer.sockets.emit("room_change", publicRooms());
  });
  socket.on("disconnecting", () => {
    socket.rooms.forEach((room) => {
      socket.to(room).emit("bye", socket.nickname);
    });
  });
  socket.on("disconnect", () => {
    wsServer.sockets.emit("room_change", publicRooms());
  });
});
// const wss = new WebSocket.Server({ server });
// const sockets = [];
// wss.on("connection", (socket) => {
//   sockets.push(socket);
//   socket["nickname"] = "Anon";
//   console.log("Connected to Browser ✅");
//   socket.on("close", () => {
//     console.log("Disconnected from Browser ❌");
//   });
//   socket.on("message", (message) => {
//     // console.log(message.toString("utf-8"));
//     // socket.send(message.toString("utf-8"));
//     const parsedMessage = JSON.parse(message);
//     switch (parsedMessage.type) {
//       case "new_message":
//         sockets
//           .filter((aSocket) => aSocket !== socket)
//           .forEach((aSocket) =>
//             aSocket.send(`${socket.nickname}: ${parsedMessage.payload}`)
//           );
//         socket.send(`You(${socket.nickname}): ${parsedMessage.payload}`);
//         break;
//       case "nickname":
//         socket["nickname"] = parsedMessage.payload;
//         break;
//     }
//   });
//   //   socket.send("Hello!");
// });

httpServer.listen(3000, handleListen);
