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

  // TODO: Add some logic to vary the price of the quote sent

  var response = {
    price: 42.99
  }

  res.send(response)
})
