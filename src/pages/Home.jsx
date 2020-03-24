import React from 'react';
import lightingConfig from '../config/lighting'; // TODO: Move to context
import Navigation from '../components/Navigation';
import LightingCard from '../components/LightingCard';

const Home = () => {
  const { lightings } = lightingConfig;
  return ( 
    <div>
      <Navigation title="LIFX Lights" />
      <div>
        {
          Object.keys(lightings).map(key => 
            <LightingCard key={key} group={key} lighting={lightings[key]} />
          )
        }
      </div>
    </div>
  );
}

export default Home;
