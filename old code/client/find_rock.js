var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { type: "Rock" };
  dbo.collection("events").find(query, { projection: { _id: 0, name: 1, type: 1, when: 1, where: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    //console.log(result);
    var json = JSON.stringify(result[0].when);

    fs.writeFile('rock_events.txt', json, function (err) {
      if (err) throw err;
      console.log(result);
    });

    db.close();
  });
});