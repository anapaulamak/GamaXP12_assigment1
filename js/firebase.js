// Initialize Firebase
var infoNome;
var infoEmail;
var infoEmpresa;
var submitButton;
var database;

function setup(){
  var config = {
    apiKey: "AIzaSyC2yTF5VfwYekxWuG1EJ12OixEm4tRI4u4",
    authDomain: "gamaacademy1-299aa.firebaseapp.com",
    databaseURL: "https://gamaacademy1-299aa.firebaseio.com",
    projectId: "gamaacademy1-299aa",
    storageBucket: "gamaacademy1-299aa.appspot.com",
    messagingSenderId: "179858226036"    
  };
  
  infoNome = document.querySelector("#nome");
  infoEmail = document.querySelector("#email");
  infoEmpresa = document.querySelector("#empresa");
  submitButton = document.querySelector("#btn_enviaForm");
  submitButton.addEventListener("click", submitData);

  firebase.initializeApp(config);
  database = firebase.database();
};

function submitData(){
  var data = {
    nome: infoNome.Value,
    email: infoEmail.Value,
    empresa: infoEmpresa.Value
  }

  var ref = database.ref('cadastro');
  ref.push(data);
  console.log(data); 
}

window.onload = function() {
  setup();
}