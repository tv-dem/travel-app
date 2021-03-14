import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './Content.scss';

import CountryContentContainer from '../CountryContent/CountryContentContainer';
import CardsAllContainer from '../CardsAll/CardsAllContainer';

const Content: React.FC = () => (
  <div className="content content-container">
    <Router>
      <Switch>
        <Route path="/country/:id" component={CountryContentContainer} />
        <Route path="/" component={CardsAllContainer} />
      </Switch>
      <Redirect from="/country/:id/*" to="/" />
    </Router>
  </div>
);

export default Content;
