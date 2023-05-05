import React from 'react';
import Header from './app/Components/header'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import clientes from './app/Dados/clientes';
// import Card from './app/Components/card';

// Paginas
import Site from './site/site';
import Login from './app/login';

function App(){
    return<BrowserRouter>
    <Routes>
        <Route exact path='/' Component={Site} />
        <Route exact path='/app' Component={Login} />
        </Routes>
  </BrowserRouter>
  }

  export default App;