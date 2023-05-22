const oldBooksOrdered = (year) =>
  books
    .filter((book) => (year - book.releaseYear) >= 60)
    .sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);