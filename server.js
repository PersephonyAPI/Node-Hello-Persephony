const express = require('express');
const app = express();
const persephonySDK = require('@persephony/sdk');
var port = process.env.PORT || 3000;

// your Persephony API key (available in the Dashboard) - be sure to set up
// environment variables to store these values
const accountId = process.env.accountId;
const authToken = process.env.authToken;
const persephony = persephonySDK(accountId, authToken);

// Handles incoming requests on the /voice endpoint
app.post('/voice', (req, res) => {
  // Create Say script to greet caller
  const hello = persephony.percl.say('Hello world!');

  // Add greeting to PerCL script and append to response
  res.status(200).json(persephony.percl.build(hello));
});

app.listen(port, () => console.log(`Hello Persephony listening on port ${port}!`));
