import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import {Login, Admin} from './pages/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={'/login'} component={Login} exact />
          <Route path={'/admin'} component={Admin} />
          <Redirect from="/" to="/admin/analyse" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
