const { remote } = require('electron');
const mainProcess = remote.require('./main.js');

document
  .querySelector('#foo')
  .addEventListener('click', () => {
    mainProcess.onClick();
  });