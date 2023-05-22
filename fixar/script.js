const primeNumbers = [17, 23, 37]

const sum = (a, b) => console.log(a + b);

sum(primeNumbers[0], primeNumbers[2]); // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [firstPrime, secondPrime, thirdPrime] = primeNumbers; // a variável primeNumbers armazena o array [17, 23, 37], logo o primeiro número primo será 17 e assim por diante.

sum(firstPrime, thirdPrime); // 54