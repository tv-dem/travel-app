import React from 'react';
import {BrowserRouter,  Route, Switch } from 'react-router-dom';
import './Content.scss';

import CountryContent from '../CountryContent/CountryContent'
import CardsAll from '../CardsAll/CardsAll';

const Content: React.FC = () => (
  <div className="content container">
  <BrowserRouter>
      <Switch>       
        <Route exact path="/" component={CardsAll} />
        <Route exact path="/:country" component={CountryContent} />        
      </Switch>
      </BrowserRouter>
  </div>
);

export default Content;
