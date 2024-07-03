// Reference path for teacher interface definition (specific to your tooling setup)
/// <reference path="Teacher.ts" />

// Namespace to group subject-related elements
namespace Subjects {
  // Interface defining the structure of a teacher object (likely defined in Teacher.ts)
  export interface Teacher {
    experienceTeachingJava?: number; // Optional property for Java teaching experience (years)
  }

  // Class representing a Java subject inheriting from a base Subject class (not shown)
  export class Java extends Subject {
    // Method to retrieve a list of requirements for learning Java
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    // Method to check for an available teacher with Java experience
    getAvailableTeacher(): string {
      const teacherExperience = this.teacher?.experienceTeachingJava; // Use safe navigation

      // Concise ternary operator to check for available teacher
      return teacherExperience ? `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
    }

    // Consider making teacher a private property if only used within Java class
    private teacher?: Teacher; // Optional teacher property (Teacher interface)

    // Constructor to optionally assign a teacher to the Java subject
    constructor(teacher?: Teacher) {
      this.teacher = teacher;
    }
  }
}
