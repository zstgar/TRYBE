const ligarDesligar = (status) => {
    if (status === 'desligado') {
      status = 'ligado';
    } else {
      status = 'desligado';
    }
    console.log(`O motor está ${status}`);
    return status;
  };