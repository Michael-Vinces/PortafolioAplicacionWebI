var eleccion=[0];
function Muestra() {  
    var num1 = parseInt(document.getElementById("escoger"). value);
    
    const arquitectura =document.querySelector('.arquitectura');
    const sidebar1 =document.querySelector('.sidebar1'); 
    const sidebar2 =document.querySelector('.sidebar2'); 
    const educacion =document.querySelector('.educacion'); 

if(eleccion[eleccion.length-1]!=num1){
    if(num1=="1"){ 
        arquitectura.classList.toggle('active')
    }
    if(num1=="2"){
        sidebar1.classList.toggle('active')
    }
    if(num1=="3"){   
        sidebar2.classList.toggle('active')
    }
    if(num1=="4"){   
        educacion.classList.toggle('active')
    }
}else{
    

}
        



    eleccion.push(num1);

    
}
