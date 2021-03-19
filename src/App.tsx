import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainePage';
import CountryPage from './Pages/CountryPage/CountryPage';
import AuthorizationPageContainer from './Pages/AuthorizationPage/AuthorizationPageContainer';
import ResetPageContainer from './Pages/AuthorizationPage/ResetPage/ResetPageContainer';
import UserPageContainer from './Pages/UserPage/UserPageContainer';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/country/:countryName" component={CountryPage} />
      <Route path='/authorization' component={AuthorizationPageContainer} />
      <Route path='/reset' component={ResetPageContainer} />
      <Route path='/user' component={UserPageContainer} />
      <Route path='/' component={MainPage} />
    </Switch>
  </BrowserRouter>
)
export default App;
