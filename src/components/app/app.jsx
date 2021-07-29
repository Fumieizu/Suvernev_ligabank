import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import {AppRoute} from '../../const';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
