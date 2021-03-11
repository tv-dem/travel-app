
import React from 'react';
import {BrowserRouter as Router,  Redirect,  Route, Switch } from 'react-router-dom';
import './Content.scss';

import CountryContent from '../CountryContent/CountryContent'
import CardsAll from '../CardsAll/CardsAll';

const Content: React.FC = () => (
  <div className="content container">
  <Router>
      <Switch>       
        <Route  path="/country/:id" component={CountryContent} />        
        <Route  path="/" component={CardsAll} />
      </Switch>
      <Redirect from="/country/:id/*" to="/"/>
      </Router>
  </div>
);

export default Content;
