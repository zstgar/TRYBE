const formatedBookNames = () => books
  .map((book) => (`${book.name} - ${book.genre} - ${book.author.name}`));

  const formatedAuthorNamesBirth = () => books
  .map((book) => (`${book.author.name} - ${book.author.birthYear}`));

  const nameAndAge = () => books
  .map((book) => (
    {
      author: book.author.name,
      age: book.releaseYear - book.author.birthYear,
    }
  ))
  .sort((obj1, obj2) => obj1.age - obj2.age);