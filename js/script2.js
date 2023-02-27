/* # Ejercicios

- Crea una función totalPrice que reciba un precio y le sume el IVA.

- Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note]. */

/* Crea una función llamada sayHello que diga por consola "hola tuNombre" y ejecútala. */

function sayHello() {
  const name = 'Pedro';
  console.log('SayHello: Hola ' + name);
}

sayHello();

/* Crea una función llamada sayHello que diga por consola "hola tuNombre" y ejecútala. */

function sayHello2(name) {
  console.log('sayHello2: Hola ' + name);
}

sayHello2('Pedro');

/* Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado. */

function calculateSquareArea(side) {
  const area = side * side;
  console.log('El área de un cuadrado de una medida de ' + side + ' es: ' + area);
}
calculateSquareArea(3);

/* Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura. */

function calculateTriangleArea(base, height) {
  const area = (base * height) / 2;
  console.log('El área de un triángulo de base ' + base + ' y de altura ' + height + ' es: ' + area);
}

calculateTriangleArea(35, 24);

/* Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio. */
function calculateCircleArea(radio) {
  const area = (Math.PI * radio) ^ 2;
  console.log('El área de un círculo de radio ' + radio + ' es: ' + area);
}

calculateCircleArea(4);

/* Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32. */

function celsiusToFahrenheit(grades) {
  const fahrenheit = grades * 1.8 + 32;
  console.log('La temperatura en Fahrenheit de ' + grades + 'ºC grados es de ' + fahrenheit + 'ºF');
}
celsiusToFahrenheit(30);

/* Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8. */

function fahrenheitToCelsius(grades) {
  const celsius = (grades - 32) / 1.8;
  console.log('La temperatura en Celsius de ' + grades + 'ºF grados es de ' + celsius + 'ºC');
}
fahrenheitToCelsius(86);

/* - Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note].  */

function writeMessage(name, material, size, note) {
  console.log(name + ' ha pedido una caja de ' + material + ' de tamaño ' + size + '. ' + note + '.');
}

writeMessage('Pedro', 'camisetas', 'Talla M', 'Entregar el martes');

