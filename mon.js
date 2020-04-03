
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';
var str = "";

app.route('/Employeeid').get(function(req, res)

    {
        MongoClient.connect(url, function(err, db) {
            var cursor = db.collection('products').find();
            //noinspection JSDeprecatedSymbols
            cursor.each(function(err, item) {

                if (item != null) {
                    str = str + "    Product name  " + item.name + "</br>";
                }
            });
            res.send(str);
            db.close();
        });
    });

var server = app.listen(27017, function() {}); 