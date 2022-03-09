const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use((req, res) => {
  res.status(404).send("Path Not Found");
});

app.listen(port, () => {
  console.log(`서버 연결 성공`);
});
