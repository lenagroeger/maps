var sfFeatureCollection = require('./sf_black.geo.json');

var dotmapper = require("dotmapper");

var pointSets = {
  population: function(properties) {
    return +properties.B02009001 / 10;
  }
};

var myPoints = dotmapper(sfFeatureCollection,pointSets);

console.log(myPoints)