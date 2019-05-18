var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Generate Nomor Undian' });
});

router.get('/anjai', function(req, res, next) {
  res.render('index', { title: 'Generate Undian' });
});

module.exports = router;
