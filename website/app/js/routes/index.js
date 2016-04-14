import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/App';
import Home from 'containers/Home';
import about from 'containers/About';
import CounterApp from 'containers/CounterApp';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={about} />
    <Route path="counter" component={CounterApp} />
  </Route>
);

export default routes;
