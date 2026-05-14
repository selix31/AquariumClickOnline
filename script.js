const firebaseConfig = {
  apiKey: "AIzaSyAo0yTTheo9sp1SfUqMlHxtQdC3IRAPB5g",
  authDomain: "aquarium-click-online.firebaseapp.com",
  databaseURL: "https://aquarium-click-online-default-rtdb.firebaseio.com",
  projectId: "aquarium-click-online",
  storageBucket: "aquarium-click-online.firebasestorage.app",
  messagingSenderId: "108301546909",
  appId: "1:108301546909:web:c644cab56e559cbd372b74"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Fonction pour envoyer le score
function envoyerScore(pseudo, score) {
  database.ref('classement/' + pseudo).set({
    nom: pseudo,
    points: score
  });
}