import React, { useState } from 'react';
import {Link, redirect, useNavigate} from 'react-router-dom'
import Header from '../../site/Components/header';
import './login.css';
import NavBar from '../Components/Navbar/navbar';

import firebase from '../Config/firebase';
import 'firebase/auth'

function Login(){
  <NavBar />

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [sucesso, setSucesso] = useState('');
  let navigate = useNavigate();

  function LoginUsuario(){
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(function(firebaseUser){
      //sucesso
      setSucesso('S')
    })
    .catch(function(error){
      //erro
      setSucesso('N')
    })
  }



    return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
    <img className="mb-4" src="https://i.imgur.com/aMSQeO4.png" alt="" />
    <h1 className="h3 mb-3 fw-normal">Login</h1>

    <div className="form-floating">
      <input onChange={(e => setEmail(e.target.value))} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
      <label for="floatingInput">E-mail</label>
    </div>

    <div className="form-floating">
      <input onChange={(e => setSenha(e.target.value))} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
      <label className="labelsenha" for="floatingPassword">Senha</label>
    </div>

    <button onClick={LoginUsuario} className="w-100 btn btn-lg btn-primary" type="button">Acessar</button>

    {
    sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert">Email ou senha invalida</div> : ''}

    {sucesso === 'S' ? navigate("/app/home") : null}


    <div className="login-links mt-5">
      <Link to="/app/resetsenha" className="mx-3">Esqueci minha senha</Link>
      <Link to="/app/novaconta" className="mx-3">Criar uma conta</Link>
    </div>

    <p className="mt-5 mb-3 text-body-secondary">&copy; 2023</p>
  </form>
    </div>;
  }

export default Login;