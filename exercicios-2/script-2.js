const circleArea = (radius) => {
    const PI = 3.14;

    if(typeof radius !== 'number') {
      return 'O parâmetro radius deve ser um número';
    }
  
    let area = PI * (radius ** 2);
    return `Esta é a área do círculo: ${area}`;
  };