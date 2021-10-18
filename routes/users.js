/**
 * @author Saimul Hasnain
 * @email saimulhasnain1@mail.com
 * @create date 2021-10-18 18:15:26
 * @modify date 2021-10-18 18:15:42
 * @desc [All general routes will be listed here]
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
