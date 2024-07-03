// Reference path for teacher interface definition (specific to your tooling setup)
/// <reference path="Teacher.ts" />

// Namespace to group subject-related elements
namespace Subjects {
  // Interface defining the structure of a teacher object (likely defined in Teacher.ts)
  export interface Teacher {
    experienceTeachingReact?: number; // Optional property for React teaching experience (years)
  }

  // Class representing a React subject inheriting from a base Subject class (not shown)
  export class React extends Subject {
    // Method to retrieve a list of requirements for learning React
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    // Method to check for an available teacher with React experience
    getAvailableTeacher(): string {
      const teacherExperience = this.teacher?.experienceTeachingReact; // Use safe navigation

      // Concise ternary operator to check for available teacher
      return teacherExperience ? `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
    }

    // Consider making teacher a private property if only used within React class
    private teacher?: Teacher; // Optional teacher property (Teacher interface)

    // Constructor to optionally assign a teacher to the React subject
    constructor(teacher?: Teacher) {
      this.teacher = teacher;
    }
  }
}
