import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import Header from '../../site/Components/header';
import './resetsenha.css'

import firebase from '../Config/firebase';
import 'firebase/auth'

function ResetSenha(){

    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('');

    function recuperarSenha(){

      firebase.auth().sendPasswordResetEmail(email).then(resultado => {
        setMensagem('')
        setSucesso('Email enviado com sucesso')
      }).catch(erro => {
        setSucesso('')
        setMensagem('Erro ao enviar email: ' + erro.message)
      })

    }
  
    return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
    <img class="mb-4" src="https://i.imgur.com/aMSQeO4.png" alt="" />
    <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

    <div className="form-floating">
      <input onChange={(e => setEmail(e.target.value))} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
      <label for="floatingInput">E-mail</label>
    </div>

    <button onClick={recuperarSenha} className="w-100 btn btn-lg btn-primary mt-3" type="button">Enviar</button>

    {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : ''}

    {sucesso.length > 0 ? <div className="alert alert-success mt-2" role="alert">{sucesso}</div> : ''}

    <div className="login-links mt-5">
      <Link to="/app/novaconta" className="mx-3">Criar uma conta</Link>
    </div>

    <p className="mt-5 mb-3 text-body-secondary">&copy; 2023</p>
  </form>
    </div>;
  }

export default ResetSenha;