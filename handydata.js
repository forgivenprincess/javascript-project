export const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
}]

export const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
export const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
export const availableGenders = ['male', 'female'];

//export function showOptions () {
  export const showOptions = () => {

  console.log(optionsText)
}
export function isInt(num){
  return /^[0-9]+$/.test(num)
}

export const optionsText =  '\n\nSelect functionality by choosing a number out from the following commands \n\n0: Press to exit \n\n1: Show alumni display table\n\n2: Show amount of alumni \n\n3: Show name of all alumni\n\n4: Delete last added student\n\n5: Delete random studen\n\n6: Show all female alumni data \n\n7: Show amount of female and male alumni \n\n8: Check if all students are female \n\n9: Display alumni between ages 20 and 25 \n\n10: Add a random blank student\n\n11: Display youngest student \n\n12: Display average alumni age \n\n13: Display average female alumni age \n\n14: Add new random grade to all students \n\n15: Sort alphabetically students by their name \n\n16: Show best student/s (all rates added) \n\n17: Show the best student according to their average rate \n\n18: Add an extra point to each rate for all alumni. Set rate as 10 if there is no existing rate'