const lifxEventsAll = {
  development: {
    onBrightnessChange: console.log
  },
  production: {
    ...window.LIFX_EVENTS
  }
};

console.log(lifxEventsAll[process.env.NODE_ENV]);
export default lifxEventsAll[process.env.NODE_ENV];
