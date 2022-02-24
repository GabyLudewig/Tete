import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Amistad/App';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
//import { Nav } from "./components/Nav/Nav";
import { GlobalProvider } from "./context/GlobalContext";

import { NotFound } from "./pages/404";
import {global} from './global/global'

// Importamos el provider y la store de React
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { Curso } from './components/Curso/Curso'
import { Help } from './components/Help/Help';
import { Amigos } from './components/Amigos/Amigos';
import { Home } from './pages/Home'
import { Registro } from './pages/Registro'
import { Apertura } from './components/apertura/apertura';
import { Frontpage } from './pages/Frontpage';


ReactDOM.render(
  <Provider store = {store}>
    <GlobalProvider>
      
      <BrowserRouter>
      
        <Routes>

          < Route path="/" element={<Apertura />} />  
          < Route path="/home" element={<Home quotesDB={global.quotesDB} />} />
          < Route path="/curso" element={<Curso />} />
          < Route path="/ayuda" element={<Help />} />
          < Route path="/portada" element={<Frontpage />} />
          < Route path="/amigos" element={<Amigos />} />
          < Route path="/login" element={<Login />} />
          < Route path="/registro" element={<Registro />} />
          < Route path="/amistad" element={<App />} />

          < Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  </Provider>,
  document.getElementById('root')
);









