# Dynamic Form Builder Component

The Dynamic Form Builder Component is a versatile tool designed for creating dynamic forms in Angular applications. It allows users to define and customize forms based on a JSON configuration, enabling the creation of complex forms with various field types and dynamic elements.

## Features

- **Dynamic Form Generation:** The component generates forms dynamically based on a provided JSON configuration. Users can define form sections, each containing various field types such as text inputs, email inputs, date pickers, dropdown lists, checkboxes, textarea inputs, and dynamic fields.

- **Section Management:** Forms can be organized into multiple sections, each with a distinct label. This helps structure the form logically, making it easy to understand and navigate.

- **Field Types:**

  - **Text Input:** Standard text input fields.
  - **Email Input:** Text input with email validation.
  - **Date Picker:** Allows users to pick a date from a calendar.
  - **Select (Dropdown List):** Dropdown list with pre-defined options.
  - **Checkbox:** Boolean toggle field.
  - **Textarea:** Multi-line text input field.
  - **Dynamic Field:** Special type allowing the addition, removal, and reordering of fields based on selected options.

- **Validation Rules:** Users can define validation rules for each field, including required fields, regular expression patterns, and email validation.

## Usage

1. **Installation:**

   - Make sure you have Angular and Bootstrap 5 CSS installed in your project.

2. **Configuration:**
   - Define your form structure using a JSON configuration. Each section can contain various fields, including dynamic fields.

```json
[
  {
    "type": "section",
    "label": "Personal Information",
    "fields": [
      { "type": "text", "label": "First Name", "name": "firstName", "required": true },
      { "type": "text", "label": "Last Name", "name": "lastName", "required": true }
      // ... other fields
    ]
  }
  // ... other sections
]
```

- Put your JSON structure file in `App Component`

3. **Component Integration:**
   - Integrate the Dynamic Form Builder Component into your Angular application by using the provided selector.

```html
<app-dynamic-form [source]="formContent" (submit)="onSubmit()"></app-dynamic-form>
```

4. **Dynamic Field Interaction:**

   - Leverage the dynamic field type to allow users to add, remove, and reorder fields based on selected options.

5. **Validation and Submission:**
   - The component handles form rendering and user input validation automatically. Implement the `onSubmit()` method to handle form submission.

## Coding Standards

Ensure consistent adherence to coding standards, including ESLint rules, EditorConfig settings, Prettier formatting, and a well-defined .gitignore file.

## Unit Testing

No unit tests implemented in this app.

## End-to-End Testing

No end-to-end tests used in this app.

## Repository Structure

Maintain a clean repository structure with organized files and directories. Include a README file explaining the project setup, key functionalities, and implemented coding standards.

# And Others

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
