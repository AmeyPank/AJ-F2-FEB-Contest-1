/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  let names = arr.filter(stu => stu.marks > 50);
  console.log("From map");
  console.log(names)
}
PrintStudentswithMap()

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  let names = arr.filter(stu => stu.marks > 50);
  console.log("From forEach");
  console.log(names)
}
PrintStudentsbyForEach()

function addData() {
  //Write your code here, just console.log
  // Addiing at the end
var s1 = {id:4,name:"susan",age:"20",marks:45}
arr.push(s1);
console.log("From Add data")
console.log(arr)
}
addData()

function removeFailedStudent() {
  //Write your code here, just console.log
  let names = arr.filter(stu => stu.marks > 50);
  console.log("From Remove");
  console.log(names)

  
}
removeFailedStudent()


let arr1 = [
  { id: 5, name: "joe", age: "19", marks: 90 },
  { id: 6, name: "mark", age: "21", marks: 95 },
  { id: 7, name: "james", age: "26", marks: 55 },
];
function concatenateArray() {
  //Write your code here, just console.log
  const result = arr.concat(arr1);
  console.log("From Concatenate")
  console.log(result)
}
concatenateArray()
