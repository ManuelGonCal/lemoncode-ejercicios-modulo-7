import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ListPage } from './views/list';
import { DetailPage } from './views/detail';
import { CorporationProvider } from './core/corporation-provider.component';

export const App = () => {
  return (
    <Router>
      <Switch>
        <CorporationProvider>
          <Route exact path="/">
            <ListPage />
          </Route>
          <Route path="/detail/:login">
            <DetailPage />
          </Route>
        </CorporationProvider>
      </Switch>
    </Router>
  );
};
