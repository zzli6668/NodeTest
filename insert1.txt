var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/ MongoDatabase";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var myobj = [     
{ name: "Mahesh Sharma", age: "25", address: "Ghaziabad"},  
{ name: "Tom Moody", age: "31", address: "CA"},  
{ name: "Zahira Wasim", age: "19", address: "Islamabad"},  
{ name: "Juck Ross", age: "45", address: "London"}  
];  
db.collection("customers").insert(myobj, function(err, res) {  
if (err) throw err;  
console.log("Number of records inserted: " + res.insertedCount);  
db.close();  
});  
});  