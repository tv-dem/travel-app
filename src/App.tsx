import React from 'react';
import { BrowserRouter , Route, Switch  } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainePage';
import CountryPage from './Pages/CountryPage/CountryPage';
import AuthorizationPage from './Pages/AuthorizationPage/AuthorizationPage';
import ResetPage from './Pages/AuthorizationPage/ResetPage/ResetPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
     
      <Route  path="/country/:countryName" component={CountryPage} /> 
      <Route  path='/authorization' component={AuthorizationPage} />
      <Route  path='/reset' component={ResetPage} />
      <Route  path='/' component={MainPage} />
    </Switch>    
  </BrowserRouter>
)
export default App;
