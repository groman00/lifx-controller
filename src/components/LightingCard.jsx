import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const LightingCard = ({ lighting }) => {
  const { title, lights } = lighting;
  const renderButton = (label = 'group') => (
    <Button size="small" color="primary">
      {title} {label}
    </Button>
  );
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* Render Group Button */}
        { renderButton() }
        {/* Render Light Buttons */}
        {
          lights && Object.keys(lights).map(key => renderButton(key))
        }        
      </CardActions>
    </Card>
  );
}

export default LightingCard;