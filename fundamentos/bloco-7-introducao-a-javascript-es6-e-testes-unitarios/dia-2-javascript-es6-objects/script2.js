const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const newTurn = (obj, key, value) =>  obj[key] = value;
  newTurn(lesson2, 'turno:', 'Manhã');

  const keysLister = (obj) => Object.keys(obj);
  console.log(keysLister);

  const keysLength = (obj) => Object.keys(obj).length;
  console.log(keysLength);

  const valuesLister = (obj) => Object.values(obj);
  console.log(valuesLister);

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  console.log(allLessons);

  const totalStudents = lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;
  console.log(totalStudents);

  const getValueByNumber = (obj, number) => Object.entries(obj)[number][1];
  console.log(getValueByNumber(lesson1, 0));

  const verifyPair = (obj, key, value) => {
    const array = Object.entries(obj);
    let teste = false;
    for(let index = 0; index < array.length; index +=1){
      if(array[index][0] === key && array[index][1] === value){
        teste = true;
      }
    }
    return teste;
  }
  console.log(verifyPair(lesson3, 'turno', 'noite'));


const countStudent = (obj) => {
  let cont = 0;
  const array = Object.keys(obj);
  for(let index = 0; index < array.length; index +=1){
    if(obj[Object.keys(obj)[index]].materia === 'Matemática' ){
      cont += obj[Object.keys(obj)[index]].numeroEstudantes;
    }
  }
  return cont;
}
console.log(countStudent(allLessons));

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));








