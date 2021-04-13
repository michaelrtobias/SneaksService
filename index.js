const express = require("express");
const app = new express();

const SneaksAPI = require("sneaks-api");

const sneaks = new SneaksAPI();

// sneaks.getProducts("grinch", function (err, products) {
//   console.log(products);
// });

app.get("/sneakerdata", (req, res, callback) => {
  sneaks.getProducts(req.query.term, (err, shoes) => {
    if (err) {
      throw err;
    } else {
      res.send(shoes);
      console.log(`Shoes for ${req.query.term}`);
    }
  });
});

app.get("/", (req, res, e) => {
  res.send("gotta catchem all");
});

app.listen(process.env.APPPORT, (e) => {
  if (e) {
    throw e;
  } else {
    console.log(`Node Server Connected on port ${process.env.APPPORT}`);
  }
});
