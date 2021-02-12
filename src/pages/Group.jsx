import React, { useState, useEffect } from 'react';
import lifxEvents from '../lib/lifxEvents';
import { withAppContext } from '../components/HOCS';
import Navigation from '../components/Navigation';
import ColorPanel from '../components/ColorPanel';

const Detail = ({ context, match }) => {
  const { group, light } = match.params;
  const config = context.lightings[group];
  const title = `${config.title} ${light || 'Group'}`;
  const [initialColorState, setInitialColorState] = useState();
  const [selector, setSelector] = useState();
  
  // Derive selector from config
  useEffect(() => {
    if (!config.lights) {
      // Color Bulb
      setSelector(config.selector);
    } else if (light) {
      // Single day/dusk bulb
      setSelector(config.lights[light]);
    } else {
      // Mulitple day/dusk bulbs
      setSelector(
        Object.keys(config.lights).map(key => config.lights[key]).join(',')
      );
    }
  }, [config, light]);  
  
  // Get intial color state
  useEffect(() => {
    if (selector) {
      lifxEvents.getColorState(selector)
        .then(lights => {
          setInitialColorState(lights[0]);
        })
        .catch(console.error);
    }
  }, [selector]);  

  return (
    <div>
      <Navigation title={title} backRoute="/"/>
      <div>
        { 
          initialColorState ? (
            <ColorPanel 
              selector={selector} 
              initialState={initialColorState}
              fullColor={group === 'color'}
            />
          ) : (
            <span>loading...</span>
          )
        }
      </div>
    </div>
  );
};

export default withAppContext(Detail);
