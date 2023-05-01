const showParagraphs = () => {
    let paragraphs = document.getElementsByTagName('p');
    let concatStrings = '';
    for (let index = 0; index < paragraphs.length - 1; index += 1) {
      concatStrings += paragraphs[index].innerText + ' ';
    }
    paragraphs[3].innerText = concatStrings;
  }
  showParagraphs();