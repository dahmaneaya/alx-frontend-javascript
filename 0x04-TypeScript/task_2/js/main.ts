// Define DirectorInterface
interface Teacher {
  workTeacherTasks(): string;
  getCoffeeBreak(): string;
}

interface Director {
  workDirectorTasks(): string;
  getCoffeeBreak(): string;
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return {
      workTeacherTasks: () => 'Getting to work',
      getCoffeeBreak: () => 'Getting a break',
    };
  } else {
    return {
      workDirectorTasks: () => 'Getting to director tasks',
      getCoffeeBreak: () => 'Getting a break',
    };
  }
}

// Type predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test cases
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
