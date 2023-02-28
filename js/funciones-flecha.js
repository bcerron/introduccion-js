const calculateSquareArea = a => a * a;
const calculateTriangleArea = (a, b) => (a * b) / 2;
const calculateCircleArea = a => (a * Math.PI) ^ 2;
const celsiusToFahrenheit = a => a * 1.8 + 32;
const fahrenheitToCelsius = a => (a - 32) / 1.8;

console.log(calculateSquareArea(4));
console.log(calculateTriangleArea(2, 3));
console.log(calculateCircleArea(42));
console.log(celsiusToFahrenheit(30));
console.log(fahrenheitToCelsius(41));

