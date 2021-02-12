import React from 'react';
import { withAppContext } from '../components/HOCS';
import Navigation from '../components/Navigation';
import LightingCard from '../components/LightingCard';
import Presets from '../components/Presets';

const Home = ({ context }) => {
  const { lightings } = context;
  return ( 
    <>
      <Navigation title="LIFX Lights" />
      <Presets />
      {
        Object.keys(lightings).map(key => 
          <LightingCard key={key} group={key} lighting={lightings[key]} />
        )
      }
    </>
  );
}

export default withAppContext(Home);
