import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Nav } from "./components/Nav/Nav";
import { GlobalProvider } from "./context/GlobalContext";

import { NotFound } from "./pages/404";
import{global}from './global/global'

// Importamos el provider y la store de React
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { Curso } from './components/Curso/Curso'
import { Help } from './components/Help/Help';
import { Home } from './pages/Home'
import { Registro } from './pages/Registro'



ReactDOM.render(
  <Provider store = {store}>
    <GlobalProvider>
      <BrowserRouter>
        <Nav />
        <Routes>

          < Route path="/" element={<Home quotesDB={global.quotesDB} />} />
          < Route path="/curso" element={<Curso />} />
          < Route path="/ayuda" element={<Help />} />
          < Route path="/login" element={<Login />} />
          < Route path="/registro" element={<Registro />} />
          < Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  </Provider>,
  document.getElementById('root')
);








