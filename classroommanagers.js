import {
    getNames,
    deleteLast,
    deleteRandom,
    getFemalesList,
    checkAllStudentsAreFemale,
    getYoungStudents,
    addRandomStudent,
    getYoungestStudent,
    getAgeAverage,
    addGrades,
    getBestStudents,
    getStudentsNamesAndGradeAverage,
    addPointsToAll
} from "./alumnifunctions.js";

import {
    students,
    availableFemaleNames,
    availableMaleNames,
    availableGenders,
} from "./handydata.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function optionsAvailable() {
    const promise = new Promise((resolve, reject) => {
        rl.question('Choose what do you want to do: ', (num) => {
            rl.pause();
            if (isInt(num)) {
                num = Number.parseInt(num);
                resolve(num);

            } else {
                reject('Please input a number');
            }
        })

    })

    return promise;
}

export async function displayOptions() {
    let optionsAvailable
    let femalesList
    let studentsScores
    let studentAges
    do {
        try {
            showOptions()
            optionsAvailable = await getOptionFromConsole();

        } catch (error) {
            console.log(error)
            process.exit(0)
        }
    } while (optionsAvailable > 0 && optionsAvailable <= 18)

}

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

switch (optionsAvailable) {
    case 0:
        "exit",
            console.log("\nThank you for using our Classroom Manager 2022. Good bye!");
        break;
    case 1:
        "1. Show alumni display table",
            console.table(students);
        break;
    case 2:
        "2. Show amount of alumni",
            console.log("\n" + "Amount of alumni:" + "\n" + students.length);
        break;
    case 3:
        "3. Show name of all alumni",
            console.log("\n" + "These are all our students:");
        getNames(students);
        break;
    case 4:
        "4. Delete last added student",
            console.log("\n" + "The last student added has been deleted");
        deleteLast(students);
        break;
    case 5:
        "5. Delete random student",
            console.log("\n" + "A random student has been deleted");
        deleteRandom(students);
        break;
    case 6:
        "6. Show all female alumni data",
            console.log("\n" + "Female students data:");
        console.log(getFemalesList(students));
        break;
    case 7:
        "7. Show amount of female and male alumni",
            console.log("\n" + " Amount of female students: " + getFemalesList(students).length + "\n" + "Amount of male students: " +
                (students.length - getFemalesList(students).length));
        break;
    case 8:
        "8. Check if all students are female",
            console.log("Do we only have female students? ");
        checkAllStudentsAreFemale(students);
        break;
    case 9:
        "9. Display alumni between ages 20 and 25",
            console.log("\n" + "Students aged between 20 and 25: ");
        getYoungStudents(students);
        break;
    case 10:
        "10. Add a random blank student ",
            addRandomStudent(students);
        break;
    case 11:
        "11. Display youngest student",
            console.log("\n" + "Our youngest student is ");
        getYoungestStudent(students);
        break;
    case 12:
        "12. Display average alumni age",
            console.log("\n" + "The average age from our students is ");
        getAgeAverage(students);
        break;
    case 13:
        "13. Display average female alumni age",
            console.log("\n" + "Average female students age is:");
        getAgeAverage(getFemalesList(students));
        break;
    case 14:
        "14. Add new random grade to all students",
            addGrades(students);
        break;
    case 15:
        "15. Sort alphabetically students by their name",
            students.sort((itemA, itemB) => itemA.name.localeCompare(itemB.name));
        break;
    case 16:
        "16. Show best student/s (all rates added)",
            console.log("\n" + "The student or students with the top added rates are:");
        getNames(getBestStudents(students));
        break;
    case 17:
        "17. Show the best student according to their average rate",
            console.log("\n" + "The student or students with the best average rates are (student and rate is displayed)");
        getStudentsNamesAndGradeAverage(getBestStudents(students));
        break;
    case 18:
        "18. Add an extra point to each rate for all alumni. Set rate as 10 if there's no existing rate",
            addPointsToAll(students);
        break;
}

displayOptions()