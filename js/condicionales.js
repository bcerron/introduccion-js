/* # Ejercicios

## Condicionales */

/* Crea una función que reciba un nombre y una edad e imprima por consola "Hola [nombre], eres mayor/menor de edad" en función de la edad que le pasemos. */
function mayorEdad(edad, nombre) {
  if (edad < 18) {
    console.log('Hola ' + nombre + ', eres menor de edad');
  } else {
    console.log('Hola ' + nombre + ', eres mayor de edad');
  }
}
mayorEdad(8, 'Pedro');

/* Crea una función que reciba 2 números distintos e imprima por consola cual es el mayor. */
function numMayor(a, b) {
  if (a < b) {
    console.log(b);
  } else {
    console.log(a);
  }
}
numMayor(4, 6);

/* Crea una función que reciba un número e imprima por consola si es un número negativo, si es positivo o si es cero. */
function numComprobacion(numero) {
  if (numero === 0) {
    console.log('El numero es 0');
  } else if (numero > 0) {
    console.log('El numero es positivo');
  } else {
    console.log('El numero es negativo');
  }
}
numComprobacion(5);

/* Crea una función que reciba el color de un semáforo, si es verde mostrará por consola "Puedes pasar", si es naranja mostrará "Acelera" y si es rojo mostrará "Frena" */

function semaforo(color) {
  if (color === 'verde') {
    console.log('Puedes pasar');
  } else if (color === 'naranja') {
    console.log('Acelere');
  } else if (color === 'rojo') {
    console.log('Frena');
  }
}
semaforo('naranja');

/* Crea una función que reciba 3 notas, si la media está entre 0 y 5 mostrará el mensaje "Suspenso", si la media está entre 5 y 8 mostrará "Aprobado" y si la media es 8 o más dirá "Matrícula de honor" */

function notas(a, b, c) {
  let media = (a + b + c) / 3;
  if (media < 5) {
    console.log('Suspenso. Nota media: ' + media);
  } else if (media >= 5 && media < 8) {
    console.log('Aprobado. Nota media: ' + media);
  } else if (media >= 8) {
    console.log('Matrícula de Honor. Nota media: ' + media);
  }
}
notas(5, 9, 4);

/* - Crea una función que reciba 3 números y los devuelva ordenados de mayor a menor */

const numeros = [42, 12, 22];

const ordenado = numeros.sort(function (a, b) {
  return a - b;
});

console.log(ordenado);

function orden2(a, b, c) {
  if (a >= b && a >= c && b >= c) {
    console.log(a, b, c);
  } else if (a >= b && a >= c && b <= c) {
    console.log(a, c, b);
  } else if (b >= a && b >= c && a >= c) {
    console.log(b, a, c);
    bac;
  } else if (b >= a && b >= c && a <= c) {
    console.log(b, c, a);
    bca;
  } else if (c >= a && c >= b && a >= b) {
    console.log(c, a, b);
  } else if (c >= a && c >= b && a <= b) {
    console.log(c, b, a);
  }
}
orden2(9, 3, 0);

