import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import Detail from './pages/Detail';

const App = () => (
  <AppProvider>
    <div> 
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:group" component={Detail} />
          <Route path="/detail/:group/:light" component={Detail} />
        </Switch>  
      </Router>    
    </div>
  </AppProvider>  
);

export default App;
