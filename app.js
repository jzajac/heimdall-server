var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(9999, function () {
  console.log('Heimdall-server listening on port 9999')
})

app.post('/quote', function (req, res) {

  console.log(req.body)

  var randomQuoteNumber = "Q" +  Math.floor(Math.random() * (999999 - 1)) + 1;
  var randomQuotePrice = Math.round((Math.random() * (450 - 50)) * 100) / 100;

  var response = {
    refNo: randomQuoteNumber,
    price: randomQuotePrice
  }

  res.send(response)
})
