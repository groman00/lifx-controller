require('dotenv').config();

/* https://github.com/klarstil/lifx-http-api */
const lifx = require('lifx-http-api');
const client = new lifx({
  bearerToken: process.env.BEARER_TOKEN,
});


client
  .listLights('all')
  .then((lights) => {
    console.log(lights[0]);

    // client.setState(`id:${lights[0].id}`, {
    client.setState('all', {
      color: 'kelvin:2700',
      brightness: .5,
    })
      .then((message) => {
        console.log(message)
      }, (e) => {
        console.log(e)
      });

  }, (e) => {
    console.error(e);
  });
