var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res) {
    console.log('Got to line 8');
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;