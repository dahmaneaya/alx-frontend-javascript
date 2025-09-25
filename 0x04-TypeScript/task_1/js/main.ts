// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Verify the function matches the interface
const printTeacherFunc: printTeacherFunction = printTeacher;

// Create teacher instances
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Create director instance
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Test the printTeacher function
console.log(printTeacher("John", "Doe")); // Should output: J. Doe
console.log(printTeacher("Jane", "Smith")); // Should output: J. Smith
console.log(printTeacher("Bob", "Johnson")); // Should output: B. Johnson

// Additional examples
const teacher1: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5,
  department: 'Mathematics',
  salary: 50000
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Johnson',
  fullTimeEmployee: false,
  location: 'California',
  subjects: ['Physics', 'Chemistry']
};

console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);