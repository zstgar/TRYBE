const oldBooks = (year) =>
  books
    .filter((book) => year - book.releaseYear > 60)
    .map((book) => book.name);