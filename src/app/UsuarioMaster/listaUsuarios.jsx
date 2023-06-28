import React, { useState, useEffect } from 'react';
import NavBar from '../Components/Navbar/navbar';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import './listaUsuarios.css';

function Authentication() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersSnapshot = await firebase.database().ref('emails').once('value');
        const usersData = usersSnapshot.val();
        const usersArray = Object.values(usersData);

        setUsers(usersArray);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);



  return (
    <div>
      <NavBar />
      <div className="lista-usuarios">
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user, index) => (
          <li className="linhaUsuario" key={index}>{user} <button className="excluirConta" onClick={() => excluirEmail(index)}> Excluir Conta </button></li>
        ))}
      </ul>
      </div>
    </div>
  );
}

function excluirEmail(user) {

  // Get the element with the specified class name
var elements = document.getElementsByClassName('linhaUsuario');

// Access the first element (or iterate through the elements if needed)
var element = elements[user];

// Get the text content of the element
var text = element.textContent || element.innerText;

// Regular expression to match an email pattern
var emailRegex = /[\w.+-]+@[\w-]+\.[\w.-]+/;

// Find the email pattern within the text
var emailMatch = text.match(emailRegex);

// Extract the email if it exists
var email = emailMatch ? emailMatch[0] : null;
console.log(email);

  //Excluir
  var database = firebase.database();
var emailsRef = database.ref('emails');

var targetEmail = email;

emailsRef.orderByValue().equalTo(targetEmail).once('value')
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var nodePath = childSnapshot.key;
      console.log('Path to node:', nodePath);

      // Remove the email using the retrieved path
      var emailNodeRef = emailsRef.child(nodePath);
      emailNodeRef.remove()
        .then(function() {
          console.log('Email removed successfully.');
        })
        .catch(function(error) {
          console.error('Error removing email:', error);
        });
    });
  })
  .catch(function(error) {
    console.error('Error retrieving data:', error);
  });



}

function teste(){
const user = firebase.auth().currentUser;

console.log(user)

// user.delete().then(() => {
//   // User deleted.
// }).catch((error) => {
//   // An error ocurred
//   // ...
// });
}

export default Authentication;