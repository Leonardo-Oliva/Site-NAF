import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../../site/Components/header';
import './resetsenha.css'

function ResetSenha(){
    return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
    <img class="mb-4" src="https://i.imgur.com/aMSQeO4.png" alt="" />
    <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
      <label for="floatingInput">E-mail</label>
    </div>

    <button className="w-100 btn btn-lg btn-primary" type="submit">Enviar</button>

    <div className="login-links mt-5">
      <Link to="/app/novaconta" className="mx-3">Criar uma conta</Link>
    </div>

    <p className="mt-5 mb-3 text-body-secondary">&copy; 2023</p>
  </form>
    </div>;
  }

export default ResetSenha;