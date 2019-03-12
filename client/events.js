var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: 'Movie: St. Louis Blues', type: 'Jazz', when: 'Friday July 21, 10am', where: 'Alabama Music Hall of Fame Lobby, Tuscumbia'},
    { name: 'Courtin the Blues Parade', type: 'Jazz', when: 'Friday July 21, 7pm', where: 'Court Street, Florence'},
    { name: 'Shoals Scholar Dollars Bids and Blues Auction', type: 'Jazz', when: 'Saturday July 22, 5pm', where: 'Marriot Conference Center, Florence'},
    { name: 'Courtin the Blues Parade', type: 'Jazz', when: 'Friday July 21, 7pm', where: 'Court Street, Florence'},
    { name: 'Lamb Jam!: The Midnighters', type: 'Blues', when: 'Thursday July 20, 6pm-9pm', where: 'Sweetwater Depot, Florence'},
    { name: 'Handy Nights: The Midnighters', type: 'Blues', when: 'Saturday July 22, 7pm-10pm', where: 'Legends, Florence'},
    { name: 'Scope Live on Helton Drive: The Midnighters', type: 'Blues', when: 'Monday July 24, 11:30am-1pm', where: 'Sweetwater Depot, Florence'},
    { name: 'Singing River Bar & Grill: The Midnighters', type: 'Blues', when: 'Friday July 28, 8pm-12am', where: 'Radisson Hotel, Sheffield'},
    { name: 'Billy Reid Presents Lillie Mae', type: 'Rock', when: 'Friday July 21, 6pm-8pm', where: 'Billy Reid, 114 N. Court St., Florence'},
    { name: 'The Lovell-Sledge Band', type: 'Rock', when: 'Friday July 21, 8pm', where: 'Singing River Brewery and Winery, Florence'},
    { name: 'Shoals Concert Band', type: 'Rock', when: 'Sunday July 23, 3pm', where: 'First Presbyterian Church, Florence'},
    { name: 'Handy Lunch with Denise Thimes & Jazz All-Stars', type: 'Rock', when: 'Monday July 24, 11am-1pm', where: '306 BBQ'},
    { name: 'Billie Reid Presents Lillie Mae', type: 'Food', when: 'Friday July 21, 6pm-8pm', where: 'Billy Reid, 114 N. Court St., Florence'},
    { name: 'The Lovell-Sledge Band', type: 'Food', when: 'Friday July 21, 8pm', where: 'Singing River Brewer and Winery, Florence'},
    { name: 'Shoals Concert Band', type: 'Food', when: 'Sunday July 23, 3pm', where: 'First Presbyterian Church, Florence'},
    { name: 'Handy Lunch with Denise Thimes & Jazz All-Stars', type: 'Food', when: 'Monday July 24, 11am-1pm', where: '306 BBQ'},
    { name: 'Billy Reid Presents Lillie Mae', type: 'Art Festivities', when: 'Friday July 21, 6pm-8pm', where: 'Billy Reid, 114 N. Court St., Florence'},
    { name: 'The Lovell-Sledge Band', type: 'Art Festivities', when: 'Friday July 21, 8pm', where: 'Singing River Brewer and Winery, Florence'},
    { name: 'Shoals Concert Band', type: 'Art Festivites', when: 'Sunday July 23, 3pm', where: 'First Presbyterian Church, Florence'},
    { name: 'Handy Lunch with Denise Thimes & Jazz All-Stars', type: 'Art Festivites', when: 'Monday July 24, 11am-1pm', where: '306 BBQ'},
    { name: 'Billy Reid Presents Lillie Mae', type: 'Misc', when: 'Friday July 21, 6pm-8pm', where: 'Billy Reid, 114 N. Court St., Florence'},
    { name: 'The Lovell-Sledge Band', type: 'Misc', when: 'Friday July 21, 8pm', where: 'Singing River Brewer and Winery, Florence'},
    { name: 'Shoals Concert Band', type: 'Misc', when: 'Sunday July 23, 3pm', where: 'First Presbyterian Church, Florence'},
    { name: 'Handy Lunch with Denise Thimes & Jazz All-Stars', type: 'Misc', when: 'Monday July 24, 11am-1pm', where: '306 BBQ'}
  ];
  dbo.collection("events").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});