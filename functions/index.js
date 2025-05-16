/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.get('*', (req, res) => {
  const host = req.hostname;

  if (host.startsWith('www.')) {
    const newHost = host.slice(4); // Remove "www."
    const redirectUrl = `https://${newHost}${req.url}`;
    res.redirect(301, redirectUrl);
  } else {
    res.status(404).send('Page not found'); // Or serve your content here if not a www. redirect
  }
});

exports.redirectWWW = functions.https.onRequest(app);