// Requisitos para imprimir
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
} from './alumnifunctions.js';
import readline from 'readline';
import {
    students,
    isInt,
    showOptions
} from './handydata.js';
/*for (const key of Object.keys(toPrintRequirements)) {
    console.log(key + " : " + toPrintRequirements[key])
}*/
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
    let choice;


    do {
        try {
            showOptions()
            choice = await optionsAvailable();
        } catch (error) {
            console.log(error);
            process.exit(0);
        }
// Adding the student table more frequently to make testing easier
        switch(choice) {
            case 0:
                // "exit",
                console.log("\nThank you for using our Classroom Manager 2022. Good bye!");
                break;
            case 1:
                //"1. Show alumni display table",
                console.table(students);
                break;
            case 2:
                //  "2. Show amount of alumni",
                console.log('Amount of alumni:', students.length);
                break;
            case 3:
                // "3. Show name of all alumni",
                console.log('These are all our students:');
                getNames(students);
                break;
            case 4:
                //  "4. Delete last added student",
                console.log('The last student added has been deleted');
                deleteLast(students);
                console.log('This is the current student table');
                console.table(students);
                break;
            case 5:
                //  "5. Delete random student",
                console.log('A random student has been deleted');
                deleteRandom(students);
                console.log('This is the current student table');
                console.table(students);
                break;
            case 6:
                // "6. Show all female alumni data",
                console.log('Female students data:');
                console.table(getFemalesList(students));
                break;
            case 7:
                //  "7. Show amount of female and male alumni",
                console.log('Amount of female students: ', getFemalesList(students).length, ' and Amount of male students: ', (students.length - getFemalesList(students).length));
                break;
            case 8:
                //  "8. Check if all students are female",
                console.log("Do we only have female students? ");
                checkAllStudentsAreFemale(students);
                break;
            case 9:
                //  "9. Display alumni between ages 20 and 25",
                console.log("\n" + "Students aged between 20 and 25: ");
                getYoungStudents(students);
                break;
            case 10:
                //  "10. Add a random blank student ",
                addRandomStudent(students);
                break;
            case 11:
                //   "11. Display youngest student",
                console.log("\n" + "Our youngest student is ");
                getYoungestStudent(students);
                break;
            case 12:
                //   "12. Display average alumni age",
                console.log("\n" + "The average age from our students is ");
                getAgeAverage(students);
                break;
            case 13:
                //  "13. Display average female alumni age",
                console.log("\n" + "Average female students age is:");
                getAgeAverage(getFemalesList(students));
                break;
            case 14:
                //  "14. Add new random grade to all students",
                addGrades(students);
                console.log('This is the current student table');
                console.table(students);
                break;
            case 15:
                // "15. Sort alphabetically students by their name",
                students.sort((itemA, itemB) => itemA.name.localeCompare(itemB.name));
                console.log('This is the current student table');
                console.table(students);
                break;
            case 16:
                //  "16. Show best student/s (all rates added)",
                console.log("\n" + "The student or students with the top added rates are:");
                getNames(getBestStudents(students));
                break;
            case 17:
                // "17. Show the best student according to their average rate",
                console.log("\n" + "The student or students with the best average rates are (student and rate is displayed)");
                getStudentsNamesAndGradeAverage(getBestStudents(students));
                break;
            case 18:
                // "18. Add an extra point to each rate for all alumni. Set rate as 10 if there's no existing rate",
                addPointsToAll(students);
                console.log('This is the current student table');
                console.table(students);
                break;
        }

    } while (choice > 0 && choice <= 18)

}

displayOptions()