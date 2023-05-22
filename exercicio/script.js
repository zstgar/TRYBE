const fantasyOrScienceFiction = () => {
    const wantedGenres = ['Fantasia', 'Ficção Científica'];
    return books
      .filter((book) => wantedGenres.includes(book.genre));
  };