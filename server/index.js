const express = require('express');
const envRoutes = require('./envRoutes');
const path = require('path');
const { PRODUCTION } = require('../tools/envConstants');

/* eslint-disable no-console */

require('./buildTools/startMessage');

const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV;
const app = express();

envRoutes[environment](app);

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Now listening on PORT ${port}`.bgGreen);
  }
});

app.get('*', function(req, res) {
  res.sendFile(
    path.join(
      __dirname,
      `../${environment === PRODUCTION ? 'dist' : 'src'}/index.html`
    )
  );
});
