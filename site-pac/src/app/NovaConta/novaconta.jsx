import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../../site/Components/header';
import './novaconta.css'

function NovaConta(){
    return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
    <img class="mb-4" src="https://i.imgur.com/aMSQeO4.png" alt="" />
    <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
      <label for="floatingInput">E-mail</label>
    </div>

    <div className="form-floating">
      <input type="password" classNameName="form-control" id="floatingPassword" placeholder="Senha" />
      <label className="labelsenha" for="floatingPassword">Senha</label>
    </div>

    <button className="w-100 btn btn-lg btn-primary" type="submit">Criar conta</button>

    <div className="login-links mt-5">
      <Link to="/app" className="mx-3">Já tenho uma conta</Link>
    </div>

    <p className="mt-5 mb-3 text-body-secondary">&copy; 2023</p>
  </form>
    </div>;
  }

export default NovaConta;