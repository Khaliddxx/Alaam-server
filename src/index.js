const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 5001;

const MONGO_URL =
  "mongodb+srv://khalidah252:02rgf4d3c6s8XLu7@alaam.sqlz9vf.mongodb.net/?retryWrites=true&w=majority";

const server = http.createServer(app);
// const { io } = require("./utils/socket");

mongoose.connection.once("open", () => {
  console.log("Mongo connected");
});

mongoose.connection.once("error", (err) => {
  console.error(err);
});

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server Startedd ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// io.attach(server);
