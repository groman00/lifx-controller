import React from 'react';
import lightingConfig from '../constants/lightingConfig';
import AppBar from '../components/AppBar';
import LightingCard from '../components/LightingCard';

const Home = () => {
  const { lightings } = lightingConfig;
  return ( 
    <div>
      <AppBar title="LIFX Lights" />
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
