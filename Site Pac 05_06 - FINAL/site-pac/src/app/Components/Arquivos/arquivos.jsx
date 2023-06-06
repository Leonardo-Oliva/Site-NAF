import React, { useState } from 'react';
import './arquivos.css';
import firebase from '../../Config/firebase';

function Arquivos() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileUpload = () => {
    if (selectedFile && !isUploading) {
      setIsUploading(true);

      const storage = firebase.storage();
      const file = selectedFile;

      const uploadTask = storage.ref().child(file.name).put(file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.querySelector('.progresso').value = progress;
        },
        (error) => {
          console.log('Erro no upload:', error);
          setIsUploading(false);
        },
        () => {
          console.log('Upload realizado com sucesso');
          setIsUploading(false);
          setUploadSuccess(true);
        }
      );
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setUploadSuccess(false);
  };

  return (
    <section className="arquivos">
      <div className="banner">
        Adicione os arquivos que deseja enviar!
      </div>
      <div className="form-container">
        <form method="post" className="form-upload">
          <label htmlFor="fileInput" className="label-input">
            <input type="file" id="fileInput" className="input-file" onChange={handleFileChange} />
          </label>
          <progress className="progresso" value="0" max="100"></progress>
          <button type="button" className="btn-upload" onClick={handleFileUpload} disabled={!selectedFile || isUploading}>
            Enviar
          </button>
          {uploadSuccess && <p className="upload-success">Upload realizado com sucesso!</p>}
        </form>
      </div>
    </section>
  );
}

export default Arquivos;