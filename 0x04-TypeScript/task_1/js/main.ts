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

// Define interface for StudentClass constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Define interface for StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this._firstName;
  }
}

// Define DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Implement Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Create the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
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

// Test the printTeacher function
console.log(printTeacher("John", "Doe")); // Should output: J. Doe
console.log(printTeacher("Jane", "Smith")); // Should output: J. Smith
console.log(printTeacher("Bob", "Johnson")); // Should output: B. Johnson

// Test the StudentClass
const student1: StudentClassInterface = new StudentClass("Alice", "Johnson");
console.log(student1.displayName()); // Should output: Alice
console.log(student1.workOnHomework()); // Should output: Currently working

const student2: StudentClassInterface = new StudentClass("Bob", "Smith");
console.log(student2.displayName()); // Should output: Bob
console.log(student2.workOnHomework()); // Should output: Currently working

// Test the createEmployee function
console.log(createEmployee(200));   // Should output: Teacher
console.log(createEmployee(1000));  // Should output: Director  
console.log(createEmployee('$500')); // Should output: Director

// Test the methods of created employees
const employee1 = createEmployee(200);
console.log(employee1.workFromHome()); // Should output: Cannot work from home

const employee2 = createEmployee(1000);
console.log(employee2.workFromHome()); // Should output: Working from home
console.log(employee2.getCoffeeBreak()); // Should output: Getting a coffee break

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