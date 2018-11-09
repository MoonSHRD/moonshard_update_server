var express = require('express');
var app = express();
const path = require('path');
const data = require('./update.json')



app.get('/updates/Windows_NT/:file(*)', function (req, res) {
    // res.send('QmNfnEubpokXZxYmMd3bTu6jT1v2c7azsU9KGBUpiW2B4e');
    var file = req.params.file;
    var fileLocation = path.join('./uploads/Windows_NT/',file);
    console.log(fileLocation);
    res.download(fileLocation, file);
    console.log(fileLocation, file)
})

app.get('/updates/Linux/:file(*)', function (req, res) {
    // res.send('QmNfnEubpokXZxYmMd3bTu6jT1v2c7azsU9KGBUpiW2B4e');
    var file = req.params.file;
    var fileLocation = path.join('./uploads/Linux/',file);
    console.log(fileLocation);
    res.download(fileLocation, file);
    console.log(fileLocation, file)
})

app.get('/:file(*)', function (req, res) {
   res.json(data);
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
