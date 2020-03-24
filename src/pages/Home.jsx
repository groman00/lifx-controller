import React from 'react';
import { withAppContext } from '../components/HOCS';
import Navigation from '../components/Navigation';
import LightingCard from '../components/LightingCard';

const Home = ({ context }) => {
  const { lightings } = context;
  return ( 
    <>
      <Navigation title="LIFX Lights" />
      <div>
        {
          Object.keys(lightings).map(key => 
            <LightingCard key={key} group={key} lighting={lightings[key]} />
          )
        }
      </div>
    </>
  );
}

export default withAppContext(Home);
