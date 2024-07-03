// Interface defining common methods for both Director and Teacher
interface EmployeeInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
}

// Interface extending EmployeeInterface with Director specific method
interface DirectorInterface extends EmployeeInterface {
  workDirectorTasks(): string;
}

// Interface extending EmployeeInterface with Teacher specific method
interface TeacherInterface extends EmployeeInterface {
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
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

// Teacher class implementing TeacherInterface
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

// Factory function to create Director or Teacher based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

console.log(createEmployee(200)); // Creates and logs Teacher object
console.log(createEmployee(1000)); // Creates and logs Director object
console.log(createEmployee("$500")); // Potential error: Salary is not a valid number

// Function to check if an employee is a Director (using instanceof)
function isDirector(employee: Teacher | Director): boolean {
  return employee instanceof Director;
}

// Function to execute work based on employee type (Director or Teacher)
function executeWork(employee: Teacher | Director): string {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else if (employee instanceof Teacher) {
    return employee.workTeacherTasks();
  }
}

console.log(executeWork(createEmployee(200))); // Calls Teacher's work method
console.log(executeWork(createEmployee(1000))); // Calls Director's work method

// String literal type alias for specific subjects
type Subjects = "Math" | "History";

// Function to handle teaching a specific subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return `Teaching Math`;
  } else if (todayClass === "History") {
    return `Teaching History`;
  }
}

console.log(teachClass("Math"));
console.log(teachClass("History"));
