import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import clientes from './app/Dados/clientes';
// import Card from './app/Components/card';

// Paginas
import Site from './site/site';
import Login from './app/Login/login';
import NovaConta from './app/NovaConta/novaconta';
import ResetSenha from './app/ResetSenha/resetsenha';
import Home from './app/Home/home';
import Faq from './app/Faq/faq';
import Authentication from './app/UsuarioMaster/listaUsuarios';
import Aluno from './app/Aluno/aluno';

function App(){
    return<BrowserRouter>
    <Routes>
        <Route exact path='/' Component={Site} />
        <Route exact path='/app' Component={Login} />
        <Route exact path='/app/novaconta' Component={NovaConta} />
        <Route exact path='/app/resetsenha' Component={ResetSenha} />
        <Route exact path='/app/home' Component={Home} />
        <Route exact path='/app/faq' Component={Faq} />
        <Route exact path='/app/usuarioMaster' Component={Authentication}/>
        <Route exact path='/app/aluno' Component={Aluno}/>
    </Routes>
  </BrowserRouter>
  }

  export default App;