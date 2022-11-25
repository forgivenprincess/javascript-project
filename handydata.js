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

export const showOptions = () => {
  console.log(optionsText)
}

const optionsText = '\n\nEscribe un número de la siguiente lista para acceder a su funcionalidad correspondiente:\nPara salir de la aplicación:\n- Escoge 0 o cualquier número distinto al de las opciones.\n\n1 - Tabla  de todos los alumnos.\n2 - Número de alumnos que hay en clase.\n3 - Nombres de todos los alumnos.\n4 - Elimina al último alumno de la lista.\n5 - Elimina a un alumno aleatoriamente.\n6 - Datos de las alumnas.\n7 - Número de chicos y chicas que hay en la clase.\n8 - ¿Todos los alumnos son chicas?(true/false).\n9 - Nombres de los alumnos entre 20 y 25 años.\n10 -Añade un alumno nuevo con los siguientes datos:\n   - Nombre aleatorio.\n   - Edad aleatoria entre 20 y 50 años.\n   - Género aleatorio (consecuente con nombre).\n   - Calificaciones - vacío.\n11 - Nombre de la persona más joven de la clase.\n12 - Edad media de todos los alumnos de la clase.\n13 - Edad media de las chicas de la clase.\n14 - Añade nueva nota aleatoria al listado de cada alumno(entre 0 y 10).\n15 - Ordena alfabéticamente a los alumnos según su nombre.\n16 - Alumno de la clase con mayor sumatorio de notas.\n17 - Nota media más alta de la clase y alumno al que pertenece.\n18 - Añade un punto extra a cada nota existente de todos los alumnos.\n(nota máxima posible: 10. Si aún no hay registro, primera nota: 10.)\n\n'

export const isInt = (num) => {
  return !Number.isNaN(num)
}


export const printMenu = {
  0: 'Press to exit.',
  1: 'Show alumni display table',
  2: 'Show amount of alumni',
  3: 'Show name of all alumni',
  4: 'Delete last added student',
  5: 'Delete random student',
  6: 'Show all female alumni data',
  7: 'Show amount of female and male alumni',
  8: 'Check if all students are female',
  9: 'Display alumni between ages 20 and 25',
  10: 'Add a random blank student ',
  11: 'Display youngest student',
  12: 'Display average alumni age',
  13: 'Display average female alumni age',
  14: 'Add new random grade to all students',
  15: 'Sort alphabetically students by their name',
  16: 'Show best student/s (all rates added)',
  17: 'Show the best student according to their average rate',
  18: 'Add an extra point to each rate for all alumni. Set rate as 10 if there is no existing rate',
}
