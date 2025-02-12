import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } }); //cross-origin requests
dotenv.config();

app.get("/", (req, res) => {
  res.status(200).send("Home");
});

//triggers when client connect to server
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  
  //listen to msg and broadcast them to clients
  socket.on("message", (msg) => {
    console.log("Message received:", msg);
    io.emit("message", msg);
  });

  socket.on("disconnect", () => console.log("User disconnected:", socket.id)); //handle client disconnect
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
});
