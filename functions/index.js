const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

admin.initializeApp();

exports.listUsers = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const usersSnapshot = await admin.database().ref("users").once("value");
      const usersData = usersSnapshot.val();

      // Criar a árvore de usuários no Realtime Database
      // const usersRef = admin.database().ref("users-tree");
      // usersRef.set(usersData);

      const usersArray = Object.values(usersData);
      res.json(usersArray);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({error: "Failed to fetch users"});
    }
  });
});