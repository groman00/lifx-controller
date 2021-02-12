import lifxEvents from '../lib/lifxEvents';

export const toColorState = (h, s, b, k) => `hue:${h} saturation:${s} brightness:${b} kelvin:${k}`;

export const setColorState = (selector, colorState) => lifxEvents.setColorState(selector, colorState);