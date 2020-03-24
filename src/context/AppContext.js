import React, { Component } from 'react';
import lifxEvents from '../lib/lifxEvents';

const Context = React.createContext({});

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...lifxEvents
    };
  }
  render() {
    const { children } = this.props;
    return (
      <Context.Provider value={this.state}>
        {children}
      </Context.Provider>
    );
  }
}

export const AppConsumer = Context.Consumer;
