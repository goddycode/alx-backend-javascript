// Interface for Student data
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create student objects with type assertion
const student1: Student = {
  firstName: "Goddy",
  lastName: "Odhis",
  age: 35,
  location: "Kisii",
};

const student2: Student = {
  firstName: "Jacob",
  lastName: "Paul",
  age: 2,
  location: "Kisumu",
};

// Array of student objects
const studentsList: Student[] = [student1, student2];

function renderStudentTable() {
  // Create the table element
  const table = document.createElement("table");
  table.classList.add("student-table");

  // Create table header
  const headerRow = document.createElement("tr");
  const headerFirstName = document.createElement("th");
  headerFirstName.textContent = "First Name";
  const headerLocation = document.createElement("th");
  headerLocation.textContent = "Location";
  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  table.appendChild(headerRow);

  // Loop through students and create rows
  for (const student of studentsList) {
    const studentRow = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    studentRow.appendChild(firstNameCell);
    studentRow.appendChild(locationCell);
    table.appendChild(studentRow);
  }

  // Append the table to the body
  document.body.appendChild(table);
}

// Call the function to render the table
renderStudentTable();
