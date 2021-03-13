import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainePage';
import AuthorizationPage from './Pages/AuthorizationPage/AuthorizationPage';
import ResetPage from './Pages/AuthorizationPage/ResetPage/ResetPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path='/authorization' component={AuthorizationPage} />
      <Route path='/reset' component={ResetPage} />
    </Switch>
  </BrowserRouter>
)
export default App;
