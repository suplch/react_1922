import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store } from './store/index';
import {Login, Admin} from './pages/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path={'/login'} component={Login} exact />
            <Route path={'/admin'} component={Admin} />
            <Redirect from="/" to="/admin/analyse" exact />
          </Switch>
        </Router>
      </Provider>
      
    </div>
  );
}

export default App;
