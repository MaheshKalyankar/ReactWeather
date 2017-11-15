var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(9000, function () {
    console.log('Servere is started on localhost:9000');
})