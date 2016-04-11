'use strict';

var mock = require('mockjs'),
  express = require('express'),
  router = express.Router();

router.get('/user/:id', function(req, res) {
  res.json(req.params);
});

// request example
router.get('/test', function(req, res) {
  res.json({
    success: true,
    message: 'Test Request API Success.'
  });
});

// Random data example
router.get('/data', function(req, res) {
  var random = mock.Random,
    data = {
      boolean: random.boolean(),
      integer: random.integer(1, 9527),
      float: random.float(1, 200, 0, 99),
      string: random.string(7, 10),
      range: random.range(1, 78, 5)
    };

  res.json(data);
});

module.exports = router;
