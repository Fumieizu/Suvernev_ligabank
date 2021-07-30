import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {AppRoute} from '../../const';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage/>
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
