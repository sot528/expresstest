var express    = require('express');
var router = express.Router();
var app        = express();
var bodyParser = require('body-parser');
var sqlite3    = require('sqlite3');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', function(req, res) {
  var db = new sqlite3.Database('sample');
  db.serialize(function() {
    db.all('SELECT id,name FROM USER', function(err, rows) {
      // res.json(rows);
      res.send(rows);
    });
  });
  db.close();
});

module.exports = router;
