import React from 'react';
import {Link} from 'react-router-dom'
import './navbar.css'

function NavBar(){
    return <nav className="navbar fixed-top navbar-expand-md navbar-dark">

    <div className="container-fluid">
            
        <a className="navbar-brand" href="">
          <img src="https://i.imgur.com/aMSQeO4.png" alt="" height="50" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/app/home" className="nav-link" aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/app" className="nav-link" aria-current="page" >Sair</Link>
            </li>
          </ul>
        </div>    
      
    </div>
  </nav>;
  }

export default NavBar;