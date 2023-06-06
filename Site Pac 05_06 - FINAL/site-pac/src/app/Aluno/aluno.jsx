import React, { useState, useEffect } from 'react';
import NavBar from '../Components/Navbar/navbar';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import './aluno.css';

function Aluno() {
  const [arquivos, setArquivos] = useState([]);

  useEffect(() => {
    const fetchArquivos = async () => {
      const storage = firebase.storage();
      const storageRef = storage.ref();
      const arquivosList = await storageRef.listAll();
  
      const arquivosData = await Promise.all(
        arquivosList.items.map(async (item) => {
          const url = await item.getDownloadURL();
          return { nome: item.name, url };
        })
      );
  
      setArquivos(arquivosData);
    };
  
    fetchArquivos();
  }, []);

  return (
    <div className="lista-arquivos">
        <NavBar/>
      <h1>Lista de Arquivos</h1>
      <ul>
        {arquivos.map((arquivo, index) => (
          <li key={index}>
            <a href={arquivo.url} target="_blank" rel="noopener noreferrer">
              {arquivo.nome}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Aluno;
