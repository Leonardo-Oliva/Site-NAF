import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../../site/Components/header';
import NavBar from '../Components/Navbar/navbar';
import './home.css'
import Arquivos from '../Components/Arquivos/arquivos';

function Home(){
    return <div>
        <NavBar />


        <Arquivos />
    </div>;
  }

export default Home;