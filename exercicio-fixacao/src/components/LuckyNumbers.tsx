function LuckyNumbers() {
  function luckyNumber() {
    return Math.floor(Math.random() * 60 + 1);
  }

  const myNumbers = [
    luckyNumber(),
    luckyNumber(),
    luckyNumber(),
    luckyNumber(),
    luckyNumber(),
    luckyNumber(),
  ];

  return (
    <>
      <h2 className="subtitle">Seus números da sorte da Mega-Sena são:</h2>
      <ul>
        {myNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </>
  );
}

export default LuckyNumbers;