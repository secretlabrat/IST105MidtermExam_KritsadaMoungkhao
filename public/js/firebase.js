const firebaseConfig = {
  apiKey: "AIzaSyCOBD4LtSIJ3BzsnzTdhqACH3Q4VpUfS_0",
  authDomain: "ist105midtermexamkritsad-4f686.firebaseapp.com",
  projectId: "ist105midtermexamkritsad-4f686",
  storageBucket: "ist105midtermexamkritsad-4f686.firebasestorage.app",
  messagingSenderId: "158640191591",
  appId: "1:158640191591:web:dd8920a8c4c3f55ea37cc2",
};

firebase.initializeApp(firebaseConfig);

firebase.auth().useDeviceLanguage();