import React from 'react';
import lightingConfig from '../config/lighting'; // TODO: Move to context
import Navigation from '../components/Navigation';
import BrightnessSlider from '../components/BrightnessSlider';

const Detail = (props) => {
  const { group, light } = props.match.params;
  const config = lightingConfig.lightings[group];
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
      <Navigation title={title} />
      <div>
        <BrightnessSlider selector={selector} />   
        <button>Done</button>   
      </div>
    </div>
  );
};

export default Detail;
