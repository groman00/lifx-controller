import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import Group from './pages/Group';

const App = () => (
  <AppProvider>
    <div> 
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/group/:group" component={Group} />
          <Route path="/group/:group/:light" component={Group} />
        </Switch>  
      </Router>    
    </div>
  </AppProvider>  
);

export default App;
