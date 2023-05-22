const expectedResult = [ 'Fundação', 'Duna' ];
const booksByAuthorBirthYear = (birthYear) =>
  books
    .filter((book) => book.author.birthYear === birthYear)
    .map((book) => book.name);
console.log(booksByAuthorBirthYear(1920));