/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
 arr.map(function(student) {
    console.log("Output from map", student);
});
}
PrintStudentswithMap()

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  function logvalues(value) {
    console.log(value);
}
  arr.forEach(logvalues);
}
PrintStudentsbyForEach()

function addData() {
  //Write your code here, just console.log
}

function removeFailedStudent() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
}
