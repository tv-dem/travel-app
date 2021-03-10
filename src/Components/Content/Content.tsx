import React from 'react'
import './Content.scss'
import DateWidgetContainer from '../DateWidget/DateWidgetContainer';

const Content:React.FC = () => (
  <div className='content container'>
    <DateWidgetContainer/>
  </div>
)

export default Content;
