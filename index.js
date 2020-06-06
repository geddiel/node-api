var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var cors = require('cors');
var app = express(); 
 
// Body Parser Middleware
app.use(bodyParser.json()); 
app.use(cors());
 
//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

 var dbConfig = {
    user:  "sa",
    password: "ptl2018",
    server: "localhost",
    database: "Test"
};

//app API
app.get('/Api/Productos', function (req, res) {
   
    var sql = require("mssql");

    // config for your database


sql.connect(dbConfig, function (err) {
    
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('select * from Productos', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});