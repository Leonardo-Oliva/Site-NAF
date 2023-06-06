import React, { useState, useEffect } from 'react';
import NavBar from '../Components/Navbar/navbar';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import './listaUsuarios.css';

const auth = firebase.auth();
const firestore = firebase.firestore();

function Authentication() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const createUsersCollection = async () => {
      const collectionRef = firestore.collection('users');
      const collectionSnapshot = await collectionRef.get();

      if (collectionSnapshot.empty) {
        await collectionRef.doc(); // Create an empty document to create the collection
      }
    };

    createUsersCollection();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersRef = firestore.collection('users');
      const snapshot = await usersRef.get();

      const usersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      redirectToLoginPage();
    } catch (error) {
      console.log('Erro ao fazer logout:', error);
    }
  };

  const redirectToLoginPage = () => {
    window.location.href = '/app';
  };

  return (
    <div className="authentication-container">
      <NavBar />
      {user ? (
        <div>
          <h1>Bem-vindo, {user.email}!</h1>
          <button onClick={handleSignOut}>Sair</button>
        </div>
      ) : (
        <div>
          <h1>Saindo...</h1>
        </div>
      )}

      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Authentication;