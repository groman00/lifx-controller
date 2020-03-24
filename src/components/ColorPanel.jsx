import React, { useState } from 'react';
import { 
  Grid, 
  Slider, 
  Card, 
  CardContent, 
  Typography 
} from '@material-ui/core';
import { withAppContext } from './HOCS';

const ColorPanel = ({ context, selector }) => {
  const [hue, setHue] = useState(180);
  const [saturation, setSaturation] = useState(.5);
  const [brightness, setBrightness] = useState(.5);
  const [kelvin, setKelvin] = useState(2700);
  const slidersChanged = () => {
    context.onColorChange(selector, `hue:${hue} saturation:${saturation} brightness:${brightness} kelvin:${kelvin}`);
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
                disabled
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
                disabled
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

export default withAppContext(ColorPanel);
