// Interface for Teacher data with read-only first and last names
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional property
  location: string;
  [index: string]: any; // Allow additional properties
}

// Interface for Director data extending Teacher and adding reports count
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface defining function signature for printing teacher initials
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function to print teacher initials (first name initial + last name)
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Interface defining a constructor for StudentClass
export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

// Interface defining methods for StudentClass objects
export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Class representing a Student with private first and last names
export class StudentClass implements IStudentClass {
  private _firstName!: string;
  private _lastName!: string;

  // Constructor to initialize student's first and last names
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Method to return a string indicating the student is working on homework
  workOnHomework() {
    return 'Currently working';
  }

  // Method to return the student's first name
  displayName() {
    return this._firstName;
  }
}

// Factory function to create StudentClass objects using a constructor
export function createStudent(ctor: IStudentClassConstructor, firstName: string, lastName: string): IStudentClass {
  return new ctor(firstName, lastName);
}
