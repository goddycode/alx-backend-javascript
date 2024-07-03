// Reference path for type definitions related to CRUD operations (specific to your tooling)
/// <reference path="./crud.d.ts" />

// Import specific types (RowID and RowElement) from the interface file
import { RowID, RowElement } from "./interface";

// Import all exported members (likely CRUD functions) from the crud file
import * as CRUD from "./crud";

// Create a new row object with first and last name (as defined by RowElement)
const row: RowElement = {
  firstName: "Goddy",
  lastName: "Odhis",
};

// Insert the row using the CRUD function and store the returned ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row object with age and spread properties from the original row
const UpdatedRow: RowElement = { age: 35, ...row };

// Update the row using the CRUD function, providing the ID and updated data
CRUD.updateRow(newRowID, UpdatedRow);

// Delete the row using the CRUD function with the retrieved ID
CRUD.deleteRow(newRowID);
