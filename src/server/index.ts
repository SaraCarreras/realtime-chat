import express from "express";
import logger from "morgan";
import { Server } from "socket.io";
import { createServer } from "node:http";

const port = process.env.PORT ?? 3000;

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user has connected!");

  socket.on("disconnect", () => {
    console.log("A user has disconnected!");
  });
});

app.use(logger("dev"));
app.use(express.static(process.cwd() + "/src/client"));

app.get("/", (_req, res) => {
  res.sendFile(process.cwd() + "/src/client/index.html");
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
