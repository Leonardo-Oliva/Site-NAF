import React from 'react';

function Footer(){
  var ano = new Date().getFullYear(); 

    return <section id="footer">    
      <div>
            <ul class="list-unstyled list-inline social text-center">
                <li class="list-inline-item"><a href="facebook.com"><i class="fa fa-facebook fa-2x"></i></a></li>
                <li class="list-inline-item"><a href="twitter.com"><i class="fa fa-twitter fa-2x"></i></a></li>
                <li class="list-inline-item"><a href="instagram.com"><i class="fa fa-instagram fa-2x"></i></a></li>						
                <li class="list-inline-item"><a href="gmail.com" target="_blank"><i class="fa fa-envelope fa-2x"></i></a></li>
            </ul>
	    </div>
      <p>Desenvolvido por 5º Fase Engenharia De Software - {ano}</p>

    </section>;
  }

export default Footer;