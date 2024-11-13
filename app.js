var firebaseConfig = {
  apiKey: "AIzaSyCb_Q1MMhJY7e_oJtszmDRhqsicsSgYY3Q",
  authDomain: "quiz-app-48235.firebaseapp.com",
  projectId: "quiz-app-48235",
  storageBucket: "quiz-app-48235.firebasestorage.app",
  messagingSenderId: "576225244730",
  appId: "1:576225244730:web:fd3241ea353f7f1d08a703"
};

var app = firebase.initializeApp(firebaseConfig);

function login() {

  var email = document.getElementById("email")
  var password = document.getElementById("password")
  console.log(email, password);

  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user);
      window.location.href = "./Home/home.html"
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    });

}