import React from 'react';

function Header(){
    return       <div className="header">
    <a href="#default" className="logo"><img id="catolica" src="https://i.imgur.com/aMSQeO4.png" alt="Logo" /></a>
    <div className="header-right">
      <a className="active" href="#home">Home</a>
      <a href="#contact">Contact</a>
      <a href="#faq">FAQ</a>
    </div>
  </div>
  }

  export default Header;