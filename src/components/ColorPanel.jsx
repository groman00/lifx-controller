import React, { useState } from 'react';
import { 
  Grid, 
  Slider, 
  Card, 
  CardContent, 
  Typography 
} from '@material-ui/core';
import lifxEvents from '../lib/lifxEvents';

const defaultState = {
  brightness: .5,
  color: {
    hue: 0,
    saturation: 0,
    kelvin: 2700,    
  },
}

const ColorPanel = ({ initialState, selector, fullColor }) => {
  const initial = {
    ...defaultState,
    ...initialState
  };
  const [hue, setHue] = useState(initial.color.hue);
  const [saturation, setSaturation] = useState(initial.color.saturation);
  const [brightness, setBrightness] = useState(initial.brightness);
  const [kelvin, setKelvin] = useState(initial.color.kelvin);
  const slidersChanged = () => {
    lifxEvents.setColorState(selector, `hue:${hue} saturation:${saturation} brightness:${brightness} kelvin:${kelvin}`);
  };
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
              <Typography gutterBottom>
                Brightness
              </Typography>
              <Slider
                onChangeCommitted={slidersChanged}
                onChange={(e, value) => setBrightness(value)}
                value={brightness}
                valueLabelDisplay="auto"
                step={.01}
                marks
                min={0}
                max={1}
              />               
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography gutterBottom>
                Kelvin
              </Typography>
              <Slider
                onChangeCommitted={slidersChanged}
                onChange={(e, value) => setKelvin(value)}
                value={kelvin}
                valueLabelDisplay="auto"
                step={100}
                marks
                min={1500}
                max={9000}
              />               
            </CardContent>
          </Card>
        </Grid>     
        <Grid item>
          <Card>
            <CardContent>
              <Typography gutterBottom>
                Hue
              </Typography>
              <Slider
                disabled={!fullColor}
                onChangeCommitted={slidersChanged}
                onChange={(e, value) => setHue(value)}
                value={hue}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={360}
              />               
            </CardContent>
          </Card>          
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography gutterBottom>
                Saturation
              </Typography>
              <Slider
                disabled={!fullColor}
                onChangeCommitted={slidersChanged}
                onChange={(e, value) => setSaturation(value)}
                value={saturation}
                valueLabelDisplay="auto"
                step={.01}
                marks
                min={0}
                max={1}
              />               
            </CardContent>
          </Card>
        </Grid>           
      </Grid>    
    </>
  );
};

export default ColorPanel;
