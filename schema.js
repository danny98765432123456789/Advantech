'use strict';

const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let realDataSchema = new Schema({
  _id: String,
  // agentId: String,
  // v: Object,
  v: Number,
  n: String,
  ts:
  {
    type: Date
    ,    default: Date.now
  }
}, { collection: 'ALKA_CHU1EK:TN23', versionKey: false });

mongoose.model('ALKA_CHU1EK:TN23', realDataSchema);

module.exports = mongoose.model('ALKA_CHU1EK:TN23');
