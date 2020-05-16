const lifxEventsAll = {
  development: {
    setColorState: console.log,
    getColorState: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: '123',
              uuid: '1a-2b-3c',
              label: 'Office 1',
              connected: true,
              power: 'on',
              color: { hue: 0, saturation: 0, kelvin: 5000 },
              brightness: 0.8499885557335775,
              effect: 'OFF',
              group: { id: '222', name: 'Day/Dusk' },
              location: { id: '333', name: 'My Home' },
              product: {
                name: 'LIFX bulb',
                identifier: 'lifx_bulb',
                company: 'LIFX',
                capabilities: [Object]
              },
              last_seen: '2020-05-16T14:56:24Z',
              seconds_since_seen: 0
            }
          ]);
        }, 1000);
      });
    }
  },
  production: {
    ...window.LIFX_EVENTS
  }
};

export default lifxEventsAll[process.env.NODE_ENV];
