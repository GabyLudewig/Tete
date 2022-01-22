import React from 'react';
import ReactDOM from 'react-dom';
import{global}from './global/global'


import {Nav} from './components/Nav/Nav';
import{Curso}from './components/Curso/Curso'
import { Help } from './components/Help/Help';
import{Home} from './pages/Home'
import { BrowserRouter,Routes,Route } from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>
  <Nav />
    <Routes>
      
      < Route path="/"element={ <Home quotesDB={global.quotesDB} />} />
      < Route path="/curso"element={ <Curso />} />
      < Route path="/ayuda"element={ <Help />} />
      
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);








