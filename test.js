/* https://github.com/klarstil/lifx-http-api */

require('dotenv').config();

const lifx = require('lifx-http-api');
const client = new lifx({
  bearerToken: process.env.BEARER_TOKEN,
});

client
  .listLights('id:d073d5389a44,id:d073d538a85c')
  .then((lights) => {
    console.log(lights);
  });

// process.exit();