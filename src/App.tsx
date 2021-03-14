import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainePage';
import CountryPage from './Pages/CountryPage/CountryPage';
import AuthorizationPage from './Pages/AuthorizationPage/AuthorizationPage';
import ResetPage from './Pages/AuthorizationPage/ResetPage/ResetPage';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route  path="/country/:id" component={CountryPage} /> 
      <Route  path='/authorization' component={AuthorizationPage} />
      <Route  path='/reset' component={ResetPage} />
    </Switch>
    
  </Router>
)
export default App;
