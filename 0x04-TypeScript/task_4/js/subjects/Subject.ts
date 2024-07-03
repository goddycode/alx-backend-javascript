/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Teacher; // Simplified type

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
