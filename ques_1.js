// . University Student Management System
// Create a class Student having rollNo, name, and marks. Initialize these properties using a constructor. Create an instance method displayResult() that displays student details and determines whether the student has passed. Create a static property/method to maintain and display the total number of Student objects created. Create at least three Student objects and demonstrate all methods.
// Concepts Covered: Class, Object, Constructor, Instance Method, Static Method


class Student {
    static totalstudent = 0;
    constructor(name,rollno,marks){
        this.name = name;
        this.rollno = rollno;
        this.marks = marks;
        Student.totalstudent++;
    }
    display() {
        console.log(this.name);
        console.log(this.rollno);
        console.log(this.marks);
        if (this.marks >= 40) {
            console.log("Passed");
        } else {
            console.log("Failed");
        }
    }
    static displayTotalStudents() {
        console.log(Student.totalstudent);
    }
}
let s1 = new Student("swarit", 12345, 50);
let s2 = new Student("royal", 12346, 60);
let s3 = new Student("vikash", 12347, 70);

s1.display();
s2.display();
s3.display();
Student.displayTotalStudents();