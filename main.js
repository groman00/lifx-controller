/* https://github.com/klarstil/lifx-http-api */

require('dotenv').config();
const { app, BrowserWindow } = require('electron');
// const { Client: TPLinkClient } = require('tplink-smarthome-api');

// Smart Plug
// (async () => {
//   const tpclient = new TPLinkClient();
//   const host = process.env.PLUG_HOST;
//   const device = await tpclient.getDevice({ 
//     host,
//     childId: process.env.PLUG_RIGHT,
//   });
//   // device.getSysInfo().then(console.log);
//   let bool = device.state === 1;
//   exports.onSmartPlugClick = () => {
//     device.setPowerState(!bool);
//     bool = !bool;
//     console.log(`turned ${bool}`);    
//   };    
// })();



// Bulbs
const lifx = require('lifx-http-api');
const client = new lifx({
  bearerToken: process.env.BEARER_TOKEN,
});

// client
//   .listLights('all')
//   .then((lights) => console.log(lights));

const createWindow = () =>  {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  // win.loadFile('index.html')
  win.loadFile('index.html')
}

// 'label:Office 2'
// 'all'
// const selector = process.env.LIFX_SELECTOR_ALL;
/* Do we need this? */
exports.onBrightnessChange = (selector, value) => {
  console.log(selector, value);
  client.setState(selector, {
    brightness: value / 100,
  }).then(console.log, console.error);
};

exports.onColorChange = (selector, color) => {
  console.log(selector, color);
  client
    .setState(selector, {
      color,
      power: 'on',
    })
    // Debug
    // .then(console.log, console.error);
};

// exports.onKelvinChange = value => {
//   console.log(`kelvin: ${value}`);
//   client.setState(selector, {
//     color: `kelvin:${value}`,
//   });
// };


// exports.onClick = () => {
//   client
//   .listLights('all')
//   .then((lights) => {
//     console.log(lights[0]);
//     client.setState('all', {
//       // color: 'kelvin:2700',
//       brightness: .5,
//     })
//       .then((message) => {
//         console.log(message)
//       }, (e) => {
//         console.log(e)
//       });

//   }, (e) => {
//     console.error(e);
//   });
// };

app.on('ready', createWindow)