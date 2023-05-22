const fantasyOrScienceFictionAuthors = () =>
  fantasyOrScienceFiction()
    .map((book) => book.author.name)
    .sort();