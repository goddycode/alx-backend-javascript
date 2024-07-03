// Reference path for teacher interface definition (specific to your tooling setup)
/// <reference path="Teacher.ts" />

// Namespace to group subject-related elements
namespace Subjects {
  // Interface defining the structure of a teacher object (likely defined in Teacher.ts)
  export interface Teacher {
    experienceTeachingC?: number; // Optional property for C++ teaching experience (years)
  }

  // Class representing a Cpp subject inheriting from a base Subject class (not shown)
  export class Cpp extends Subject {
    // Method to retrieve a list of requirements for learning Cpp
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    // Method to check for an available teacher with C++ experience
    getAvailableTeacher(): string {
      const teacherExperience = this.teacher?.experienceTeachingC; // Use safe navigation

      if (teacherExperience && teacherExperience > 0) {
        return `Available Teacher: ${this.teacher.firstName} (with ${teacherExperience} years of C++ experience)`;
      } else {
        return "No available teacher for C++";
      }
    }

