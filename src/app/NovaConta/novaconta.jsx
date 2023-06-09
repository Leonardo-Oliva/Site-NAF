import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './novaconta.css'
import firebase from '../Config/firebase';
import 'firebase/auth';

const database = firebase.database();

function NovaConta(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('');

    function cadastrarUsuario(){
      setMensagem('')

      if(!email || !senha){
        setMensagem('Informe todos os campos')
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
        setMensagem('')
        setSucesso('Conta criada com sucesso')

        // Insere o e-mail no banco
        const novoEmailRef = database.ref('/emails').push();
        novoEmailRef.set(email);
        
      }).catch(error => {
        if (error.message === 'Password should be at least 6 characters') {
          setSucesso('')
          setMensagem('A senha deve ter pelo menos 6 caracteres');
        } else if (error.message === 'The email address is badly formatted.') {
          setSucesso('')
          setMensagem('O email não é válido');
        }
        else if (error.message === 'The email address is already in use by another account.') {
          setSucesso('')
          setMensagem('Esse email já está em uso por outra conta');
        }
        else {
          setSucesso('')
          setMensagem('Erro ao criar conta: ' + error.message);
        }
      })
    }


    return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
    <img class="mb-4" src="https://i.imgur.com/aMSQeO4.png" alt="" />
    <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

    <div className="form-floating">
      <input onChange={(e => setEmail(e.target.value))} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
      <label for="floatingInput">E-mail</label>
    </div>

    <div className="form-floating">
      <input onChange={(e => setSenha(e.target.value))} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
      <label className="labelsenha" for="floatingPassword">Senha</label>
    </div>

    <button onClick={cadastrarUsuario} className="w-100 btn btn-lg btn-primary" type="button">Criar conta</button>

{mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : ''}
{sucesso.length > 0 ? <div className="alert alert-success mt-2" role="alert">{sucesso}</div> : ''}

    <div className="login-links mt-5">
      <Link to="/app" className="mx-3">Já tenho uma conta</Link>
    </div>

    <p className="mt-5 mb-3 text-body-secondary">&copy; 2023</p>
  </form>
    </div>;
  }

export default NovaConta;