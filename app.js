const { remote } = require('electron');
const { 
  getColorState,
  setColorState,
  // onSmartPlugClick,
} = remote.require('./main.js');

window.LIFX_EVENTS = {
  getColorState,
  setColorState
  // onSmartPlugClick,
};
