import React from 'react';
import { AppConsumer } from '../context/AppContext';

export function withAppContext(Component) {
  return function WrapperComponent(props) {
    return (
      <AppConsumer>
        {(context) => (
          <Component {...props} context={context} />
        )}
      </AppConsumer>
    );
  }
};
