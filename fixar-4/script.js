// Caso não seja passado um valor para value ele agora assumirá o valor padrão de 1.
const multiply = (number, value = 1) => number * value;

console.log(multiply(8));