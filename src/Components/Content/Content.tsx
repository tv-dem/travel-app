import React from 'react';
import { Route } from 'react-router-dom';
import './Content.scss';
import CardsAllContainer from '../CardsAll/CardsAllContainer';

const Content: React.FC = () => (
  <div className="content content-container">
    <Route path="/" component={CardsAllContainer} />
  </div>
);

export default Content;
