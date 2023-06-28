import React from 'react';
import './faq.css';
import NavBar from '../Components/Navbar/navbar';

function Faq(){
    return <div className='coisa'>
        <NavBar />
<div className='question'>
  <input type='checkbox' id='question-1' />
  <label for='question-1'>Primeira pergunta?</label>
  <div className='answer'>
    Primeira resposta.
  </div>
</div>

<div className='question'>
  <input type='checkbox' id='question-2' />
  <label for='question-2'>Segunda pergunta?</label>
  <div class='answer'>
    Segunda resposta.
  </div>
</div>
    </div>;
  }



export default Faq;