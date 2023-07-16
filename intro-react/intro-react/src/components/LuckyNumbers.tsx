function LuckyNumbers() {
  function luckyNumber() {
    return Math.floor(Math.random() * 60 + 1);
  }

  return (
    <>
      <h2 className="subtitle">Seus números da sorte da Mega-Sena são:</h2>
      <ul>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
      </ul>
    </>
  );
}

export default LuckyNumbers;
