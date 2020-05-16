/* https://github.com/klarstil/lifx-http-api */

require('dotenv').config({ path: __dirname + '/env/.env' });

const lifx = require('lifx-http-api');
const client = new lifx({
  bearerToken: process.env.BEARER_TOKEN,
});

client
  // .listLights('id:d073d5389a44,id:d073d538a85c')
  .listLights('id:d073d5502a35')
  // .listLights('all')
  .then((lights) => {
    console.log(lights);
  });

// process.exit();