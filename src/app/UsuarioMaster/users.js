// const express = require('express');
// const admin = require('firebase-admin');
// const app = express();

// // Inicialize o SDK do Firebase Admin
// const serviceAccount = require('./Config/firebase.js');
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// // Rota para obter a lista de usuários
// app.get('/users', async (req, res) => {
//   try {
//     const userRecords = await admin.auth().listUsers();
//     const userList = userRecords.users.map((userRecord) => ({
//       uid: userRecord.uid,
//       email: userRecord.email,
//       displayName: userRecord.displayName,
//       phoneNumber: userRecord.phoneNumber,
//       // Outras informações do usuário
//     }));
//     res.json(userList);
//   } catch (error) {
//     console.log('Erro ao listar usuários:', error);
//     res.status(500).send('Erro ao listar usuários');
//   }
// });

// // Inicie o servidor
// app.listen(3000, () => {
//   console.log('Servidor iniciado na porta 3000');
// });

// export default app;