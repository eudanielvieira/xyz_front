import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './helpers/PrivateRoute';
import { privateRoutesArr, routesArr } from './routes';

const App = () => {
  const routeComponents = routesArr.map(
    ({ path, component }) => (
      <Route exact path={path} component={component} key={path} />
    )
  );
  const PrivateRouteComponents = privateRoutesArr.map(
    ({ path, component }) => (
      <PrivateRoute exact path={path} component={component} key={path} />
    )
  );

  return (
    <BrowserRouter>
      <Switch>
        { PrivateRouteComponents }
        { routeComponents }
      </Switch>
    </BrowserRouter>
  );
};

export default App;
