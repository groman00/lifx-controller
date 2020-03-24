const lifxEventsAll = {
  development: {
    onBrightnessChange: console.log,
    onColorChange: console.log
  },
  production: {
    ...window.LIFX_EVENTS
  }
};

export default lifxEventsAll[process.env.NODE_ENV];
