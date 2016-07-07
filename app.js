var express = require('express');
var request = require('request');
var app = express();

var api_key = "";

app.get('/graphhopper_matrix', function(req, res) {
    var url = 'https://maps.googleapis.com/maps/api/distancematrix/json?'; 
    if(api_key)
      url += "&key=" + api_key;
      
    var options = {
        qs: req.query,
        url: url
    }
    req.pipe(request(options)).pipe(res);
});

app.listen(3000, function () {
  console.log('GraphHopper Matrix API proxy listening on port 3000');
});