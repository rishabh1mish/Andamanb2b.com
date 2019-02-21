var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
}); 

router.get('/contact.html', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/aboutandaman.html', function(req, res, next) {
  res.render('aboutandaman', { title: 'Express' });
});

router.get('/package1.html', function(req,res,next) {
  res.render('package1');
});

router.get('/package2.html', function(req,res,next) {
  res.render('package2');
});

router.get('/package3.html', function(req,res,next) {
  res.render('package3');
});

router.get('/package4.html', function(req,res,next) {
  res.render('package4');
});

module.exports = router;