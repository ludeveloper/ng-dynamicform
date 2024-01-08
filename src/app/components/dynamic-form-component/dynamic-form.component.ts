import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
})
export class DynamicFormComponent implements OnInit {
  @Input() source!: any[];
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({});

    this.source.forEach((section) => {
      const sectionGroup = this.fb.group({});
      section.fields.forEach((field: any) => {
        if (field.type === 'dynamic') {
          const dynamicFieldsArray = this.fb.array([]);
          sectionGroup.addControl(field.type, dynamicFieldsArray);
        } else {
          const control = this.fb.control(field.value || '');
          this.applyValidators(control, field);
          sectionGroup.addControl(field.name, control);
        }
      });
      this.form.addControl(
        section.label.toLowerCase().replace(' ', '_'),
        sectionGroup
      );
    });
  }

  applyValidators(control: any, field: any) {
    if (field.required) {
      control.setValidators([Validators.required]);
    }
    if (field.validation) {
      if (field.validation.pattern) {
        control.setValidators([
          ...(control.validator ? [control.validator] : []),
          Validators.pattern(field.validation.pattern),
        ]);
      }
      if (field.type === 'email') {
        control.setValidators([
          ...(control.validator ? [control.validator] : []),
          Validators.email,
        ]);
      }
    }
  }

  addDynamicField(sectionName: string) {
    const sectionGroup = this.form.get(sectionName) as FormGroup;
    const dynamicFieldsArray = sectionGroup.get('dynamic') as FormArray;

    if (dynamicFieldsArray) {
      dynamicFieldsArray.push(this.fb.group({ label: '' }));
    } else {
      console.error(`Form array ${sectionName}.dynamic not found.`);
    }
  }

  removeDynamicField(sectionName: string, index: number) {
    const sectionGroup = this.form.get(sectionName) as FormGroup;
    const dynamicFieldsArray = sectionGroup.get('dynamic') as FormArray;

    if (dynamicFieldsArray) {
      dynamicFieldsArray.removeAt(index);
    } else {
      console.error(`Form array ${sectionName}.dynamic not found.`);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.error('Form is invalid. Please check the fields.');
    }
  }
}
