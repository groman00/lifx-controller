import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withAppContext } from './HOCS';

const BrightnessSlider = ({ context, selector }) => (
  <Slider
    onChangeCommitted={(e, value) => context.onBrightnessChange(selector, value)}
    defaultValue={50}
    valueLabelDisplay="auto"
    step={1}
    marks
    min={1}
    max={100}
  />  
);

export default withAppContext(BrightnessSlider);
