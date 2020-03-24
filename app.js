const { remote } = require('electron');
const { 
  onBrightnessChange, 
  onKelvinChange,
  onSmartPlugClick,
} = remote.require('./main.js');

window.ElectronMethods = {
  onBrightnessChange, 
  onKelvinChange,
  onSmartPlugClick,
};

// // document
// //   .querySelector('#foo')
// //   .addEventListener('click', e => {
// //     mainProcess.onClick();
// //   });

// const brightness = document.querySelector('#brightness');
// // brightness.addEventListener('input', e => console.log(e.target.value))
// brightness.addEventListener('change', e => onBrightnessChange(e.target.value));


// const kelvin = document.querySelector('#kelvin');
// // kelvin.addEventListener('input', e => console.log(e.target.value))
// kelvin.addEventListener('change', e => onKelvinChange(e.target.value));

// const smartplug = document.querySelector('#smartplug');
// smartplug.addEventListener('click', e => onSmartPlugClick());
