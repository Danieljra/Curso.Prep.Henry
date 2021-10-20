// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    return x;
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad >= 18) {
    var texto_1 = "Allowed";
    return texto_1;
  } else {
    var texto_2 = "Not allowed";
    return texto_2;
  }
}

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  switch (status) {
    case 1:
      var activo = "Online";
      return activo;
      break;
    case 2:
      var lejos = "Away";
      return lejos;
      break;
    default:
      var no_activo = "Offline";
      return no_activo;
      break;
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch (idioma) {
    case "aleman":
      var respuesta_1 = "Guten Tag!";
      return respuesta_1;
      break;
    case "mandarin":
      var respuesta_2 = "Ni Hao!";
      return respuesta_2;
      break;
    case "ingles":
      var respuesta_3 = "Hello!";
      return respuesta_3;
      break;
    default:
      var respuesta_4 = "Hola!";
      return respuesta_4;
      break;
  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  switch (color) {
    case "blue":
      var si_es_azul = "This is blue";
      return si_es_azul;
      break;
    case "red":
      var si_es_rojo = "This is red";
      return si_es_rojo;
      break;
    case "green":
      var si_es_verde = "This is green";
      return si_es_verde;
      break;
    case "orange":
      var si_es_naranja = "This is orange";
      return si_es_naranja;
      break;
    default:
      var no_es = "Color not found";
      return no_es;
      break;
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 || numero === 5) {
    return true;
  } else {
    return false;
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20) {
    return true;
  } else {
    return false;
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (numero % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0 && numero % 5 === 0) {
    var es_divisible = "fizzbuzz";
    return es_divisible;
  } else if (numero % 5 === 0) {
    var es_divisible_5 = "buzz";
    return es_divisible_5;
  } else if (numero % 3 === 0) {
    var es_divisible_3 = "fizz";
    return es_divisible_3;
  } else {
    return numero;
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.

  if (num1 > num2 && num1 > num3 && num1 > 0) {
    var si_es_mayor = "Número 1 es mayor y positivo";
    return si_es_mayor;
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    var hay_negativos = "Hay negativos";
    return hay_negativos;
  } else if (num3 > num1 && num3 > num2) {
    var nuevo_valor = num3 + 1;
    return nuevo_valor;
  } else if (num1 === 0 || num2 === 0 || num3 === 0) {
    var no_es_correcto = "Error";
    return no_es_correcto;
  }
  } else {
    return false;
  }
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return true;
    } else {
      return false;
    }
  }
}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor) {
    var si_lo_es = "Soy verdadero";
    return si_lo_es;
  } else {
    var no_lo_es = "Soy falso";
    return no_lo_es;
  }
}

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
}

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero > 99 && numero < 1000) {
    return true;
  } else {
    return false;
  }
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var cont = 0;
  do {
    var resultado = numero;
    numero = resultado + 5;
    var cont = cont + 1;
  } while (cont < 8);

  return numero;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile,
};
