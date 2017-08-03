var express = require('express');
var mongoose = require('mongoose');
var request = require('request');

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({
  extended: false
});

var schema = require('./schema');


var router = express.Router();

 //==================================GoogleMap API==================================


// router.route('/googlemap/:parkinglot_id')
//
//   .get(function(req, res) {
//     parkinglot.findOne({
//       park_name: req.params.parkinglot_id
//         }).exec(function(err, result) {
//       res.send(result);
// //console.log(result);
//      })
//     })

router.route('/tagname')

  .get(function(req, res) {

    schema.find({
      //park_name: req.params.parkinglot_id
     //park_id: req.params.parkinglot_id
    }).exec(function(err, result) {
      res.send(result);
console.log(result);
console.log(err);
     })
    })

module.exports = router;
