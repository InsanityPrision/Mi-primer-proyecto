let studentsName = ["Carlos", "Erik"];
let studentsSurnames = ["Garcia", "Riquelme"];
let studentsAge = [21, 18];

let coursesName = [
  "Curso inicial a Python",
  "Gestión de sistemas de bases de datos",
  "JavaScipt avanzado",
];
let coursesLevel = ["básico", "intermedio", "avanzado"];
let coursesDuration = ["4", "8", "14"];

let sumedAges = studentsAge[0] + studentsAge[1];
let avargeAgeOfStudents = sumedAges / studentsName.length;

console.log(
  "INFORME DE LA ESCUELA" + "\n" + "\n",

  "Cursos:" + "\n",

  "- " +
    coursesName[0] +
    " (" +
    coursesLevel[0] +
    ", " +
    coursesDuration[0] +
    " horas)" +
    "\n",

  "- " +
    coursesName[1] +
    " (" +
    coursesLevel[1] +
    ", " +
    coursesDuration[1] +
    " horas)" +
    "\n",
  "- " +
    coursesName[2] +
    " (" +
    coursesLevel[2] +
    ", " +
    coursesDuration[2] +
    " horas)" +
    "\n" +
    "\n" +
    "\n",
  "Alumnos:" + "\n",
  "- " +
    studentsName[0] +
    " " +
    studentsSurnames[0] +
    ", " +
    studentsAge[0] +
    " años" +
    "\n",
  "- " +
    studentsName[1] +
    " " +
    studentsSurnames[1] +
    ", " +
    studentsAge[1] +
    " años" +
    "\n" +
    "\n" +
    "\n",
  "Edad media de los alumnos: " + avargeAgeOfStudents + " años"
);
