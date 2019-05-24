use stock_portfolio;
db.dropDatabase();

db.stocks.insertMany([
  {
    name: "TESC",
    quantity: 10,
    strike_price: 32
  },
  {
    name: "SMSN",
    quantity: 15,
    strike_price: 900
  },
  {
    name: "BAZA3",
    quantity: 100,
    strike_price: 25
  }

])
