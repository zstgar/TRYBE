function getNumberOfStudentsMath(obj) {
    let total = 0;
    let keys = Object.keys(obj);
    for (index in keys) {
      if(obj[keys[index]].materia === 'Matemática'){
        total += obj[keys[index]].numeroEstudantes;
      }
    }
    return total;
  }
  console.log(getNumberOfStudentsMath(allLessons));