
var CORRECT_USER='1';
var CORRECT_PASS='1';

var inputUsername =document.getElementById('username');
var inputPassword =document.getElementById('password');
var formLogin =document.getElementById('login-form');

// if(formLogin.attachEvent){
//     formLogin.attachEvent('submit',onFormSubmit);
// }else{
//     formLogin.addEventListener('submit',onFormSubmit);
// }

function onFormSubmit(e){
    e.preventDefault();
    var username = inputUsername.value;
    var password=inputPassword.value;

  
    if(username==CORRECT_USER && password==CORRECT_PASS){
        // alert('Thanh cong');
        
        window.location = "../html/index.html";
        // window.location.replace('index.html');
    }else{
        alert('That bai');
    }
}