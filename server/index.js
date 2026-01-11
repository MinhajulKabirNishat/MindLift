const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const Sentiment = require("sentiment");

const app = express();
const sentiment = new Sentiment();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("send_message", (data) => {
    const analysis = sentiment.analyze(data.message);

    if (analysis.score < -2) {
      socket.emit(
        "error_message",
        "Please keep the conversation supportive and kind."
      );
    } else {
      io.emit("receive_message", data);
    }
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
