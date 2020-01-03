import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import {Login, Admin} from './pages/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={'/login'} component={Login} exact />
          <Route path={'/admin'} component={Admin} exact />
          <Redirect from="/" to="/admin" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
