const { remote } = require('electron');
const { 
  onBrightnessChange, 
  onColorChange,
  onSmartPlugClick,
} = remote.require('./main.js');

window.LIFX_EVENTS = {
  onBrightnessChange, 
  onColorChange,
  onSmartPlugClick,
};
