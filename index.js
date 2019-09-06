/* https://github.com/klarstil/lifx-http-api */
const lifx = require('lifx-http-api');
const client = new lifx({
  bearerToken: 'c94c176a3c6a7cb4b8f681abb509826ee4913611195e805cb5113f4341699ad0',
});


client
  .listLights('all')
  .then((lights) => {
    console.log(lights[0]);

    client.setState(`id:${lights[0].id}`, {
      color: 'blue saturation:0.5',
      brightness: .75,
    })
      .then((message) => {
        console.log(message)
      }, (e) => {
        console.log(e)
      });

  }, (e) => {
    console.error(e);
  });
