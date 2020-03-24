import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const LightingCard = ({ group, lighting }) => {
  const { title, lights } = lighting;
  return (
    <Card>
      <CardActionArea
        component={RouterLink} 
        to={`/group/${group}`}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {
          lights && Object.keys(lights).map((key, i) => 
            <Button 
              key={i}
              size="small" 
              color="primary"
              component={RouterLink} 
              to={`/group/${group}/${key}`}
            >
              {title} {key}
            </Button>          
          )
        }        
      </CardActions>
    </Card>
  );
}

export default LightingCard;
