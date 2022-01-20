import React from 'react';
import ReactDOM from 'react-dom';
import{global}from './global/global'
//import {Counter} from './components/Counter/Counter';
import {Nav} from './components/Nav/Nav';
import{Inicio}from './components/Inicio/Inicio'
import{Quotes}from './components/Quotes/Quotes'
//import{Buspub}from './components/Inicio/Buspub';
ReactDOM.render(
  <>
    {/*<Buspub/>*/}
    <Nav />
    <Inicio/>
    <Quotes quotesDB={global.quotesDB} />
    {/*<Counter/>*/}
  </>,
  document.getElementById('root')
);







