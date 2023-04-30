function getInfo(obj, name) {
    let allLessons = [];
    let numberStudents = 0;
    let values = Object.values(obj);
    for (index in values) {
      if (values[index].professor === name) {
        allLessons.push(values[index].materia)
        numberStudents += values[index].numeroEstudantes;
      }
    }
    return { aulas: allLessons, estudantes: numberStudents };
  }
  
  function createReport(allLessons, name) {
    let report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));