var continuar = true;

while (continuar) {

  // Precio base
  var precio_base = 2000;

  // Recargos
  var edad_18 = 0.1;
  var edad_25 = 0.2;
  var edad_50 = 0.3;

  var casado_18 = 0.1;
  var casado_25 = 0.2;
  var casado_50 = 0.3;

  var hijos_recargo = 0.2;

  var recargo = 0;
  var recargo_total = 0;

  // Nombre
  var nombre = prompt("Ingrese su nombre o escriba 'Salir' para terminar");

  if (nombre.toUpperCase() === "SALIR") {
    continuar = false;
    break;
  }

  // Edad asegurado
  var edad = parseInt(prompt("¿Cuántos años tiene?"));

  // Estado civil
  var casado = prompt("¿Está casado actualmente?");

  var edad_conyuge_numero = 0;
  if (casado.toUpperCase() === "SI") {
    edad_conyuge_numero = parseInt(prompt("¿Qué edad tiene su esposo/a?"));
  }

  // Hijos
  var hijos = prompt("¿Tiene hijos o hijas?");
  var cantidad_hijos = 0;

  if (hijos.toUpperCase() === "SI") {
    cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?"));
    recargo = precio_base * hijos_recargo * cantidad_hijos;
    recargo_total += recargo;
  }

  // Recargo por edad asegurado
  if (edad >= 18 && edad <= 24) {
    recargo = precio_base * edad_18;
  } else if (edad >= 25 && edad <= 49) {
    recargo = precio_base * edad_25;
  } else if (edad >= 50) {
    recargo = precio_base * edad_50;
  }
  recargo_total += recargo;

  // Recargo por edad del cónyuge
  if (casado.toUpperCase() === "SI") {
    if (edad_conyuge_numero >= 18 && edad_conyuge_numero <= 24) {
      recargo = precio_base * casado_18;
    } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero <= 49) {
      recargo = precio_base * casado_25;
    } else if (edad_conyuge_numero >= 50) {
      recargo = precio_base * casado_50;
    }
    recargo_total += recargo;
  }

  // NUEVO: Recargo por propiedades
  var propiedades = parseInt(prompt("¿Cuántas propiedades posee?"));
  recargo = precio_base * 0.35 * propiedades;
  recargo_total += recargo;

  // NUEVO: Recargo por salario
  var salario = parseFloat(prompt("Ingrese su salario mensual"));
  recargo = salario * 0.05;
  recargo_total += recargo;

  // Precio final
  var precio_final = precio_base + recargo_total;

  // Resultado
  alert("Asegurado: " + nombre);
  alert("Recargo total: Q" + recargo_total);
  alert("Precio final del seguro: Q" + precio_final);
}