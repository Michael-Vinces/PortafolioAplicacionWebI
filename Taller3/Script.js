function Start(){
  var Numero1 = parseInt(document.getElementById("1"). value);
  var Numero2 = parseInt(document.getElementById("2"). value);
  var cont = 0;
  var Sumar = Numero1 + Numero2;
  var Restar = Numero1 - Numero2;
  var Multiplicar = Numero1 * Numero2;
  var Division = Numero1 / Numero2;
  var Mod = Numero1 % Numero2;

  while (cont < 5) {
    if (cont == 0) {
      alert("La suma entre " + Numero1 + " y " + Numero2 + " es: " + Sumar);
    }
    if (cont == 1) {
      alert("La resta entre " + Numero1 + " y " + Numero2 + " es: " + Restar);
    }
    if (cont == 2) {
      alert(
        "La multiplicacion entre " + Numero1 + " y " + Numero2 +" es: " + Multiplicar);
    }
    if (cont == 3) {
      alert("La division entre " + Numero1 + " y " + Numero2 + " es: " + Division);
    }
    if (cont == 4) {
      alert("El MOD es: " + Mod);
    }
    cont++;
  }
}
