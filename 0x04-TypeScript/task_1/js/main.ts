// Define the Teacher interface
// Define the Teacher interface
interface Teacher {
  readonly firstName: string;  // Only modifiable when initialized
  readonly lastName: string;   // Only modifiable when initialized
  fullTimeEmployee: boolean;   // Always defined
  yearsOfExperience?: number;  // Optional
  location: string;            // Always defined
  [propName: string]: any;     // Allow any additional attributes
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;     // Required attribute for directors
}

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