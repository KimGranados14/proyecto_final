//variables utiles
//precio base de la cotizacion en quetzales.
var precio_base = 2000
//valores de los recargos
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2 // 20%

// recargos
var recargo = 0;
var recargo_total = 0;

// precio final 
// mensajes de alerta para ingresar datos
var nombre = prompt("ingrese su nombre por favor");
var edad = prompt("¿cuantos años tiene? ingrese solamente numeros") 

var casado = prompt("¿Esta casado actualmente?") 

// comprobamos la edad del conyuge, solamente si esta casado/a 
var edad_conyuge 
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?");
  }
  //convirtiendo la edades ingresadas a numeros 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

  var hijos = prompt ("¿tiene hijos o hijas?")
  // comprobamos la cantidad de hijos solo si los tienen 
  //1. convierta la cantidad de hijos a numero
  var cantidad_hijos = 0;
  if ("SI" == hijos.toUpperCase()) {
    cantidad_hijos = parseInt(prompt(" ¿cuantos hijos tiene"))
  }
  //calcular el recargo total basado en las respuestas ingresadas
  if (cantidad_hijos > 0) {
    recargo = precio_base * hijos_recargo * cantidad_hijos; 
    recargo_total = recargo_total + recargo;
  }
  //calculo de los recargos y el valor final 
  if ( edad_numero >= 18 && edad_numero <=24) {recargo = precio_base * edad_18;
  recargo_total = recargo_total + recargo;
  } else if ( edad_numero >= 25 && edad_numero <= 49) {recargo = precio_base * edad_25;
  recargo_total = recargo_total + recargo;
  } else if (edad_numero >= 50) {recargo = precio_base * edad_50;
  recargo_total = recargo_total + recargo;
   }
   //2.recargo por la edad del conyuge 
if("SI" == casado.toUpperCase()) {edad_conyuge_numero = parseInt(prompt("ingrese la edad del conyuge"));
if (edad_conyuge_numero >= 18 && edad_conyuge_numero <= 24) {
  recargo = precio_base * casado_18; 
 } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero <= 49){
  recargo = precio_base * casado_25
 } else if (edad_conyuge_numero >= 50) {
  recargo = precio_base * casado_50
 }
 recargo_total = recargo_total + recargo;
} 


precio_final = precio_base + recargo_total
//resultado
alert ("para el asegurado: " + nombre);
alert ("el recargo total sera de: " + recargo_total);  
alert ("el precio sera de: " + precio_final);

