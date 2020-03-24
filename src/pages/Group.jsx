import React from 'react';
import { withAppContext } from '../components/HOCS';
import Navigation from '../components/Navigation';
import ColorPanel from '../components/ColorPanel';

const Detail = ({ context, match }) => {
  const { group, light } = match.params;
  const config = context.lightings[group];
  const title = `${config.title} ${light || 'Group'}`;
  let selector;
  if (group === 'all') {
    selector = 'all';
  } else if (light) {
    selector = config.lights[light];
  } else {
    selector = Object.keys(config.lights).map(key => config.lights[key]).join(',');
  }
  return (
    <div>
      <Navigation title={title} backRoute="/"/>
      <div>
        <ColorPanel selector={selector} />
      </div>
    </div>
  );
};

export default withAppContext(Detail);
