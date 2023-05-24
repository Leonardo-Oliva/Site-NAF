import React from 'react';
import './arquivos.css'
import firebase from '../../Config/firebase';



function Arquivos(){
    return <section className='arquivos'>
        <form method="post">
          <input type="file" className="arquivo" />
          <progress className="progresso mt-2" value="0"></progress>
          {/* <button onClick={teste} type="button">Teste</button> */}
        </form>
    </section>
  }

  //Upload de Arquivos
  

  // function teste(){
  //   console.log(input)
  // }

  // const storage = firebase.storage();


  // const input = document.querySelector('.arquivo');
  // console.log(input)

  // if(input != null){
  //   console.log("Teste")
  //   input.addEventListener('click', (e)=>{
  //     let file = e.target.files[0];

  //     const uploadTask = storage.ref(`/${e.target.files[0]}`)
  //     .put(e.target.files[0]);

  //     uploadTask.on("state_changed",function(snapshot){

  //       let progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 1;

  //       document.querySelector('progress').value = progress;

  //     },function(error){},function(){
  //       console.log('upload realizado com sucesso');
  //     })


  // });
  // }


export default Arquivos;