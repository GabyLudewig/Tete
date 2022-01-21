import React from 'react';
import ReactDOM from 'react-dom';
import{global}from './global/global'

import {Nav} from './components/Nav/Nav';
import{Quotes}from './components/Quotes//Quotes'


ReactDOM.render(
  <>
    
    <Nav />
  
    <Quotes quotesDB={global.quotesDB} />
     
  </>,
  document.getElementById('root')
);







