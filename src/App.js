import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

/* 
TODO:
1. Load lighting config with context api, instead of importing into each page.
*/
const App = () => (
  <div> 
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:group" component={Detail} />
        <Route path="/detail/:group/:light" component={Detail} />
      </Switch>  
    </Router>    
  </div>
);

export default App;
