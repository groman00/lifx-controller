/* https://github.com/klarstil/lifx-http-api */

require('dotenv').config();
const { app, BrowserWindow } = require('electron');
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

  // and load the index.html of the app.
  win.loadFile('index.html')
}

exports.onClick = () => {
  client
  .listLights('all')
  .then((lights) => {
    // console.log(lights[0]);
    client.setState('all', {
      // color: 'kelvin:2700',
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
};

app.on('ready', createWindow)