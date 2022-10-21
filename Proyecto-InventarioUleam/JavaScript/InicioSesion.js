window.onload=()=>{
    this.sessionStorage.setItem ("email", "e1313198382@live.uleam.edu.ec");
    this.sessionStorage.setItem ("password", "soyeljefe");
}
var input = document.getElementsByTagName('input');
var login = document.getElementById('log-in');
var form = document.querySelector('form');
form.onsubmit =()=>{return false}
login.onclick = ()=>{
    if ((input[0].value != "") && (input[1].value != "")){
        if((input[0].value == sessionStorage.getItem ("email"))&&(input[1].value ==sessionStorage.getItem ("password"))){
                form.onsubmit =()=>{return 1}
        }
        else{
            if((input[0].value != sessionStorage.getItem ("email"))){
                input[0].nextElementSibling.textContent="Correo electrónico inválido.";
                setTimeout ( ()=>{
                    input[0].nextElementSibling.textContent = "";
                },  2000);
            }
            else{
                if ((input[1].value != sessionStorage.getItem ("password"))){
                input[1].nextElementSibling.textContent="Contraseña inválida.";
                setTimeout ( ()=>{
                    input[1].nextElementSibling.textContent = "";
                },  2000);}
            }
        }
    }
}
