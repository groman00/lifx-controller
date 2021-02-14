import React, { useState, useEffect } from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography 
} from '@material-ui/core';
import { setColorState, toColorState } from '../lib/utils';
import { Donut } from 'react-dial-knob'

const defaultState = {
  brightness: .5,
  color: {
    hue: 0,
    saturation: 0,
    kelvin: 2700,    
  },
}

const toDonut = (min, max, step, value, setValue, label) => (
  <Donut
    diameter={100}
    min={min}
    max={max}
    step={step}
    value={value}
    theme={{
      donutColor: 'blue'
    }}
    onValueChange={setValue}
    ariaLabelledBy={label}
  >
    <label id={label}>{label}</label>
  </Donut>  
);

const ColorPanel = ({ initialState, selector, fullColor }) => {
  const initial = {
    ...defaultState,
    ...initialState
  };
  const [hue, setHue] = useState(initial.color.hue);
  const [saturation, setSaturation] = useState(Math.round(initial.color.saturation * 100));
  const [brightness, setBrightness] = useState(Math.round(initial.brightness * 100));
  const [kelvin, setKelvin] = useState(initial.color.kelvin);

  useEffect(() => {
    const handler = setTimeout(() => {
      setColorState(selector, toColorState(hue, saturation / 100, brightness / 100, kelvin));
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [selector, hue, brightness, kelvin, saturation]);  

  return (
    <>
      <Grid 
        container
        spacing={1}
        direction="column"
      >
        <Grid item>
          <Card>
            <CardContent>
              { toDonut(0, 100, 1, brightness, setBrightness, 'Brightness') }
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              { toDonut(1500, 9000, 100, kelvin, setKelvin, 'Kelvin') }                        
            </CardContent>
          </Card>
        </Grid>    
        { fullColor && (
          <>
            <Grid item>
              <Card>
                <CardContent>
                  { toDonut(0, 360, 1, hue, setHue, 'Hue') }                        
                </CardContent>
              </Card>          
            </Grid>
            <Grid item>
              <Card>
                <CardContent>
                  { toDonut(0, 100, 1, saturation, setSaturation, 'Saturation') }                                     
                </CardContent>
              </Card>
            </Grid>    
          </>       
        )}          
      </Grid>    
    </>
  );
};

export default ColorPanel;
