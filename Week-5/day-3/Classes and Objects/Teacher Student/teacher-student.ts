`use strict`;
// Create Student and Teacher classes
// Student
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

class Student {
  constructor(student: string) {
    this.student = student;
  }
  student: string;
  question(teacher: Teacher): void {
    console.log(`${this.student} is asking a question from ` + teacher.teacher);
    teacher.answer();
  }

  learn(): void {
    console.log(`${this.student} is learning now.`);
  }
}

class Teacher {
  teacher: string;
  constructor(teacher: string) {
    this.teacher = teacher;
  }
  answer() {
    console.log(`${this.teacher} is answering the question.`);
  }
  teach(student: Student): void {
    console.log(`${this.teacher} is teaching now.`);
    student.learn();
  }
}

let Lilian = new Student(`Lilian`);
let Balazs = new Teacher(`Balazs`);

Lilian.question(Balazs);
Balazs.teach(Lilian);
