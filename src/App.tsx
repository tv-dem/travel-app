import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainePage';
import AuthorizationPage from './Pages/AuthorizationPage/AuthorizationPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path='/authorization' component={AuthorizationPage} />
    </Switch>
  </BrowserRouter>
)
export default App;
