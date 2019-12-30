require('dotenv').config();

const { Client: TPLinkClient } = require('tplink-smarthome-api');

/* https://github.com/klarstil/lifx-http-api */
const lifx = require('lifx-http-api');
const client = new lifx({
  bearerToken: process.env.BEARER_TOKEN,
});


client
  .listLights('all')
  .then((lights) => {
    console.log('listing lights');
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




const tpclient = new TPLinkClient();
const plug = tpclient.getDevice({host: '192.168.86.240'}).then((device)=>{
  device.getSysInfo().then(console.log);
  device.setPowerState(true);
});

console.log('plug', plug);

// Look for devices, log to console, and turn them on
tpclient.startDiscovery().on('device-new', (device) => {
  device.getSysInfo().then(console.log);
  device.setPowerState(false);
});