import {
    students,
    availableFemaleNames,
    availableMaleNames,
    availableGenders,
} from "./handydata.js";

/* 
Funciones a usar en el switch case
*/
/* 
### OPCIONES
### INDISPENSABLES
0- Cerrar programa
1- Mostrar en formato de tabla todos los alumnos.
2- Mostrar por consola la cantidad de alumnos que hay en clase.
3- Mostrar por consola todos los nombres de los alumnos.
4- Eliminar el último alumno de la clase.
5- Eliminar un alumno aleatoriamente de la clase.
6- Mostrar por consola todos los datos de los alumnos que son chicas.
7- Mostrar por consola el número de chicos y chicas que hay en la clase.
8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
10- Añadir un alumno nuevo con los siguientes datos:
11- Mostrar por consola el nombre de la persona más joven de la clase.
12- Mostrar por consola la edad media de todos los alumnos de la clase.
13- Mostrar por consola la edad media de las chicas de la clase.
14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
15- Ordenar el array de alumnos alfabéticamente según su nombre.
### OPTATIVOS
16- Mostrar por consola el alumno de la clase con las mejores notas.
17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.
18- Añadir un punto extra a cada nota existente de todos los alumnos. Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.
*/
export const sum = (array) => {
    return array.reduce((valueA, valueB) => valueA + valueB, 0);
};

//switch case 3
export const getNames = students.map(student => student.name);

//switch case 4
export const deleteLast = (studentsArray) => {
    studentsArray.length = studentsArray.length - 1;
    return studentsArray;
};

//switch case 5
export const deleteRandom = (studentsArray) => {
    let student = (Math.random() * studentsArray.length) | 0;
    return studentsArray.splice(student, 1);
};

//switch case 6 and
//switch case 7 and
//switch case 13
export const getFemalesList = (studentsArray) => {
    let females = [];
    for (let index = 0; index < studentsArray.length; index++) {
        if (studentsArray[index].gender === "female") {
            females.push(studentsArray[index]);
        }
    }
    return females;
};

//switch case 8
export const checkAllStudentsAreFemale = (studentsArray) => {
    let isTrue = studentsArray.every((student) => student.gender === "female");
    return console.log(isTrue);
};

//switch case 9
export const getYoungStudents = (studentsArray) => {
    let youngStudents = [];
    for (let index = 0; index < studentsArray.length; index++) {
        if (studentsArray[index].age >= 20 && studentsArray[index].age <= 25) {
            youngStudents.push(studentsArray[index].name);
        }
    }
    return console.log(youngStudents.join());
};

//switch case 10
export const addRandomStudent = (studentsArray) => {
    let studentAge = Math.floor(Math.random() * 30) + 20;
    let studentGender =
        availableGenders[Math.floor(Math.random() * availableGenders.length)];
    let studentName = "";
    if (studentGender === "female") {
        studentName =
            availableFemaleNames[
            Math.floor(Math.random() * availableFemaleNames.length)
            ];
    } else {
        studentName =
            availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];
    }
    let newStudent = {
        age: studentAge,
        examScores: [],
        gender: studentGender,
        name: studentName,
    };
    return studentsArray.push(newStudent);
};

//switch case 11
export const getYoungestStudent = (studentsArray) => {
    let minAge = Math.min(...studentsArray.map((student) => student.age));
    let minAgeData = studentsArray.filter((student) => student.age === minAge);
    let youngestStudentsNames = [];
    for (let index = 0; index < minAgeData.length; index++) {
        youngestStudentsNames.push(minAgeData[index].name);
    }
    return console.log(youngestStudentsNames.join());
};

//switch case 12 and
//switch case 13
export const getAgeAverage = (studentsArray) => {
    let studentsAge = [];
    for (let index = 0; index < studentsArray.length; index++) {
        studentsAge.push(studentsArray[index].age);
    }
    return console.log(meanAverage(studentsAge));
};

//switch case 14
export const addGrades = (studentsArray) => {
    for (let index = 0; index < studentsArray.length; index++) {
        studentsArray[index].examScores.push(Math.floor(Math.random() * 11));
    }
    return studentsArray;
};

//switch case 16
export const getBestStudents = (studentsArray) => {
    let bestStudent = [studentsArray[0]];
    let bestStudentGrades = sumGrades(bestStudent[0]);
    for (let index = 1; index < studentsArray.length; index++) {
        if (sumGrades(studentsArray[index]) > bestStudentGrades) {
            bestStudent = [studentsArray[index]];
            bestStudentGrades = sumGrades(studentsArray[index]);
        } else if (sumGrades(studentsArray[index]) === bestStudentGrades) {
            bestStudent.push(studentsArray[index]);
        }
    }
    return bestStudent;
};


export const sumGrades = (student) => {
    return sum(student.examScores);
};

//switch case 17
export const getStudentsNamesAndGradeAverage = (studentsArray) => {
    for (let index = 0; index < studentsArray.length; index++) {
        console.log(
            studentsArray[index].name +
            " " +
            meanAverage(studentsArray[index].examScores)
        );
    }
};
export const meanAverage = (array) => {
    return +Math.round((sum(array) / array.length + Number.EPSILON) * 100) / 100;
};

//switch case 18
export const addPointsToAll = (studentsArray) => {
    for (let index = 0; index < studentsArray.length; index++) {
        addGradePoint(studentsArray[index].examScores);
    }
};
export const addGradePoint = (grades) => {
    if (grades.length === 0) {
        grades.push(10);
    } else {
        for (let index = 0; index < grades.length; index++) {
            if (grades[index] < 10) {
                grades[index] += 1;
            }
        }
    }
    return grades;
};