import React from 'react';
import Slider from '@material-ui/core/Slider';
import AppBar from '../components/AppBar';
import lightingConfig from '../constants/lightingConfig';

const Detail = (props) => {
  const { group, light } = props.match.params;
  const config = lightingConfig.lightings[group];
  const title = `${config.title} ${light || 'Group'}`;
  let selector;
  console.log(group, light, config);
  if (light) {
    selector = config.lights[light];
  } else {
    selector = Object.keys(config.lights).map(key => config.lights[key]).join(',');
  }
  const onChange = (e, value) => {
    window.ElectronMethods.onBrightnessChange(selector, value);
  };
  return (
    <div>
      <AppBar title={title} />
      <div>
        {/* <button onClick={onChange}>Update</button>   */}
        {selector}        
        <Slider
          onChangeCommitted={onChange}
          defaultValue={50}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={100}
        />     
        {/* <button>Preview</button> */}
        <button>Done</button>   
      </div>
    </div>
  );
};

export default Detail;
