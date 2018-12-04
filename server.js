var express = require('express');
var app = express();
const path = require('path');
const data = require('./update.json')



app.get('/updates/:file(*)', function (req, res) {
    res.header("Content-Type", "jsapplication/x-7z-compressed");
    // res.send('QmNfnEubpokXZxYmMd3bTu6jT1v2c7azsU9KGBUpiW2B4e');
    var file = req.params.file;
    var fileLocation = path.join('./updates/',file);
    res.download(fileLocation, file);
    console.log(fileLocation, file)
})


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
