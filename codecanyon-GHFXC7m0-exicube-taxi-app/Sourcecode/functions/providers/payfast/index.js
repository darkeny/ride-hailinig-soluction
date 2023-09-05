const functions = require('firebase-functions');
const payfastcheckout = require('./checkout');

exports.link = functions.https.onRequest(payfastcheckout.render_checkout);
exports.process = functions.https.onRequest(payfastcheckout.process_checkout);