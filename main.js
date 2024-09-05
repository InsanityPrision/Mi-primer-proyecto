let studentsNames = ["Carlos", "Erik"];
let studentsSurnames = ["Garcia", "Riquelme"];
let studentsAges = [21, 18];

let coursesNames = [
  "Curso inicial a Python",
  "Gestión de sistemas de bases de datos",
  "JavaScipt avanzado",
];
let coursesLevels = ["básico", "intermedio", "avanzado"];
let coursesDurations = [4, 8, 14];

let sumedAges = studentsAges[0] + studentsAges[1];
let studentsAvargeAge = sumedAges / studentsNames.length;

console.log(
  "INFORME DE LA ESCUELA" + "\n" + "\n",

  "Cursos:" + "\n",

  "- " +
    coursesNames[0] +
    " (" +
    coursesLevels[0] +
    ", " +
    coursesDurations[0] +
    " horas)" +
    "\n",

  "- " +
    coursesNames[1] +
    " (" +
    coursesLevels[1] +
    ", " +
    coursesDurations[1] +
    " horas)" +
    "\n",
  "- " +
    coursesNames[2] +
    " (" +
    coursesLevels[2] +
    ", " +
    coursesDurations[2] +
    " horas)" +
    "\n" +
    "\n" +
    "\n",
  "Alumnos:" + "\n",
  "- " +
    studentsNames[0] +
    " " +
    studentsSurnames[0] +
    ", " +
    studentsAges[0] +
    " años" +
    "\n",
  "- " +
    studentsNames[1] +
    " " +
    studentsSurnames[1] +
    ", " +
    studentsAges[1] +
    " años" +
    "\n" +
    "\n" +
    "\n",
  "Edad media de los alumnos: " + studentsAvargeAge + " años"
);
