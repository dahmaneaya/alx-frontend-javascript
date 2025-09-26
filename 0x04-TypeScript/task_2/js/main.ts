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

// Type predicate function to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test the createEmployee function
console.log(createEmployee(200));   // Should output: Teacher
console.log(createEmployee(1000));  // Should output: Director  
console.log(createEmployee('$500')); // Should output: Director

// Test executeWork function
console.log(executeWork(createEmployee(200)));  // Should output: Getting to work
console.log(executeWork(createEmployee(1000))); // Should output: Getting to director tasks

// Test the methods of created employees
const employee1 = createEmployee(200);
console.log(employee1.workFromHome()); // Should output: Cannot work from home

const employee2 = createEmployee(1000);
console.log(employee2.workFromHome()); // Should output: Working from home
console.log(employee2.getCoffeeBreak()); // Should output: Getting a coffee break

// Additional tests for isDirector function
const testEmployee1 = createEmployee(200);
const testEmployee2 = createEmployee(1000);
console.log('Is testEmployee1 a director?', isDirector(testEmployee1)); // Should output: false
console.log('Is testEmployee2 a director?', isDirector(testEmployee2)); // Should output: true