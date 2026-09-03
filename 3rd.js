// let student = {
//     first: "Swarit",
//     last: "Sahu",
//     city: "Ghaziabad",
//     pincode: 201009,

//     salary: function() {
//         console.log("salary:20000");
//     },

//     subject: ["web development", "python", "java"]
// };

// console.log(student.first);
// console.log(student.last);
// student.salary();

// console.log(student.subject[0]);
// console.log(student.subject[1]);
// console.log(student.subject[2]);

// let student = new Object();

// student.name = "Swarit";
// student.pincode = 201009;
// student.city = "Ghaziabad";

// student.salary = function() {
//     document.write("Salary");
// };

// console.log(student.name);
// console.log(student.pincode);
// console.log(student.city);

// student.salary();

//function constructor
function student(name,rollnumber,pincode,city) {
    this.name=name;
    this.rollno=rollnumber;
    this.pcode=pincode;
    this.city=city;
}
let s1=new student("vikas",220,201304,"noida")
console.log(s1);