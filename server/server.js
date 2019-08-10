const express = require("express");
const app = express();
const path = require("path");
const parser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: "../config.env" });
app.use(cors());

const publicPath = path.join(__dirname, "../client/public");
app.use(express.static(publicPath));
app.use(parser.json());

// MongoClient.connect(process.env.MONGODB_URI)
//   .then(client => {
//     const db = client.db("stocks");
//     const stocksCollection = db.collection("stocks");
//     const stocksRouter = createRouter(stocksCollection);
//     app.use("/api/stocks", stocksRouter);
//   })
//   .catch(console.error);

// app.listen(process.env.PORT || 3000, function() {
//   console.log(`Listening on Port ${this.address().port}`);
// });
MongoClient.connect(
  process.env.MONGODB_URI || "mongodb://localhost/rotten-potatoes"
);
const port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;
