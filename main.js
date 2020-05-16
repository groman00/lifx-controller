/* https://github.com/klarstil/lifx-http-api */

require('dotenv').config({ path: __dirname + '/env/.env' });

const { app, BrowserWindow } = require('electron');
// const { Client: TPLinkClient } = require('tplink-smarthome-api');

console.log(process.env.BEARER_TOKEN);

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

const createWindow = () =>  {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

exports.setColorState = (selector, color) => {
  console.log(selector, color);
  client
    .setState(selector, {
      color,
      power: 'on',
    })
    // Debug
    // .then(console.log, console.error);
};

exports.getColorState = selector => client.listLights(selector);

app.on('ready', createWindow)
