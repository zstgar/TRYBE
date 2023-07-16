function Greeting() {
  const name = 'Lucas';
  const lastName = 'Stygar';
  return (
    <h1 className="greeting">
      Olá
      {' '}
      {`${name} ${lastName}`}
    </h1>
  );
}

export default Greeting;
