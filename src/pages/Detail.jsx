import React from 'react';
import { withAppContext } from '../components/HOCS';
import Navigation from '../components/Navigation';
import BrightnessSlider from '../components/BrightnessSlider';

const Detail = ({ context, match }) => {
  const { group, light } = match.params;
  const config = context.lightings[group];
  const title = `${config.title} ${light || 'Group'}`;
  let selector;
  if (light) {
    selector = config.lights[light];
  } else {
    selector = Object.keys(config.lights).map(key => config.lights[key]).join(',');
  }
  console.log(group, light, config, selector);  
  return (
    <div>
      <Navigation title={title} backRoute="/"/>
      <div>
        <BrightnessSlider selector={selector} />   
        <button>Done</button>   
      </div>
    </div>
  );
};

export default withAppContext(Detail);
