// // Say we have a list of students that we would like to
// sort in alphabetical order. If students have the
// same name, then we prioritize the older student first.


var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


students.sort(function sortFunction(student1, student2) {
  var nameA = student1.name.toUpperCase();
  var nameB = student2.name.toUpperCase();
  if (nameA < nameB) {               //only checking the string
   return - 1;                        // if it's less than 0, student1 will be a lower index than student2
  } else if (studentNameA > studentNameB) {
   return 1;
  }                                   //at this point, all the names are sorted alphabetically
   return student1.age - student2.age; //sorting the age only if the names are the same.

})

console.log(students);

sortStudents();