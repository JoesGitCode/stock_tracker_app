const express = require("express");
const app = express();
const path = require("path");
const parser = require("body-parser");
const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");
const cors = require("cors");

app.use(cors());

const publicPath = path.join(__dirname, "../client/public");
app.use(express.static(publicPath));
app.use(parser.json());

MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017")

  .then(client => {
    console.log("is this actually working????????", process.env.MONGODB_URI);

    const db = client.db("heroku_jl126ggn");
    const stocksCollection = db.collection("stocks");
    const stocksRouter = createRouter(stocksCollection);
    app.use("/api/stocks", stocksRouter);
  })
  .catch(console.error);

app.listen(process.env.PORT || 3000, function() {
  console.log(`Listening on Port ${this.address().port}`);
});
