import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import presets from '../config/presets';
import { setColorState, toColorState } from '../lib/utils';

const Presets = () => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Presets
        </Typography>
      </CardContent>
      <CardActions>
        {
          presets.map(({ title, value }, i) => 
            <Button 
              key={i}
              size="small" 
              color="primary"
              onClick={() => setColorState('all', toColorState(...value))}
            >
              {title}
            </Button>           
          )
        }
      </CardActions>
    </Card>
  );
}

export default Presets;
