'use strict';

const util = require('util');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const schema = require('./schema.js');
var express = require('express');

var app = express();

// mongoose.connect(util.format('mongodb://%s:%s@%s:%d/%s',
//   conf.username, conf.password, conf.hostname, conf.port, conf.database), { useMongoClient: true });
mongoose.connect('mongodb://6bc397d3-bc38-4137-bced-aacb92605f73:wuj7tj2leRQGpuw0lDED0YZHJ@207.46.144.47:27017/a145dde9-d82d-42d3-a5da-1dce89921d7d',{useMongoClient: true});

let db = mongoose.connection;
mongoose.Promise = Promise;


var tagname = require('./api');
app.use('/123', tagname);

// db.once('open', () => {
//   console.log('[mongodb] Connect success !');
//   let q = schema.find(
//   //   {
//   //       n: 'ALKA_OA201BU:OAW',
//   //   ts: {
//   //     $gte: new Date('2017-06-03'),
//   //     $lte: new Date('2017-06-04')
//   //   }
//   // }
// );
//   q.exec((err, result) => {
//     if (err) {
//       return console.error(err);
//     }
//     console.log(result);
//   });
// });
db.on('error', (err) => { console.error('[mongodb] Connect error ! ' + err); });

app.listen('3001', function(request, response) {
  console.log('listening to 3001 port');
});
