function time(){
    var hora = new Date();
    var horaactual=hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
    output = document.getElementById("horaactual");
    output.innerHTML = "La hora actual es: <span style='color: green;'>" + horaactual;
}
function transformar(){
    var hora = new Date();
    var horaensegundos= ((hora.getHours()*3600)+(hora.getMinutes()*60)+hora.getSeconds());
    output = document.getElementById("horaensegundos");
    output.innerHTML = "La hora actual en segundos es: <span style='color: green;'>" + horaensegundos;
}
function Area() {
    var num1 = parseInt(document.getElementById("a"). value);
    var num2 = parseInt(document.getElementById("b"). value);
    var area = (num1*num2)/2;
    output = document.getElementById("area");
    output.innerHTML = "El área es: <span style='color: green;'>" + area;
}
function RaizCuadrada(){
  var numR1 = parseInt(document.getElementById("x"). value);
  const raizCuadrada = Math.sqrt(numR1);
  const redondeo = Math.round(raizCuadrada*1000)/1000;
  output = document.getElementById("redondeo");
  output.innerHTML = "La raiz cuadrada es:<span style='color: green ;'>" + redondeo.toPrecision(3);
}
function Contador(frase){
    var frase = document.getElementById("p").value;
    frase=frase.replace(/ /g, "");
    caracteres=frase.length;
    output = document.getElementById("caracteres");
    output.innerHTML = "Conteo: <span style='color: green ;'>" + caracteres;
    var caracteresagrupados = frase.toLowerCase().split("").sort();
    var contletras = {};
    for(var i in caracteresagrupados) {
        contletras[caracteresagrupados[i]] = (contletras[caracteresagrupados[i]] || 0 ) + 1;
    }
    return JSON.stringify(contletras);
}
function Navegador(){
    var nav=navigator.appName+" "+ navigator.appVersion;
    output = document.getElementById("nav");
    output.innerHTML = "<span style='color: green ;'>" + nav;
}
function IMPRIMIR() {
    window.print();
}