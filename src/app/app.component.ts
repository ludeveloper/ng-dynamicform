import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DynamicFormComponent } from './components/dynamic-form-component/dynamic-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  source = [
    {
      type: 'section',
      label: 'Additional Information',
      fields: [
        {
          type: 'textarea',
          label: 'Bio',
          name: 'bio',
        },
        {
          type: 'dynamic',
          label: 'Skills',
          name: 'skills',
          options: [
            {
              value: 'programming',
              label: 'Programming',
            },
            {
              value: 'design',
              label: 'Design',
            },
            {
              value: 'writing',
              label: 'Writing',
            },
          ],
        },
      ],
    },
    {
      type: 'section',
      label: 'Personal Information',
      fields: [
        {
          type: 'text',
          label: 'First Name',
          name: 'firstName',
          required: true,
        },
        {
          type: 'text',
          label: 'Last Name',
          name: 'lastName',
          required: true,
        },
        {
          type: 'email',
          label: 'Email',
          name: 'email',
          required: true,
          validation: {
            pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$',
          },
        },
        {
          type: 'date',
          label: 'Date of Birth',
          name: 'dateOfBirth',
        },
      ],
    },
    {
      type: 'section',
      label: 'Contact Information',
      fields: [
        {
          type: 'text',
          label: 'Phone Number',
          name: 'phoneNumber',
          mask: '(###) ###-####',
        },
        {
          type: 'select',
          label: 'Country',
          name: 'country',
          options: [
            {
              value: 'US',
              label: 'United States',
            },
            {
              value: 'UK',
              label: 'United Kingdom',
            },
            {
              value: 'CA',
              label: 'Canada',
            },
          ],
        },
        {
          type: 'checkbox',
          label: 'Subscribe to newsletter',
          name: 'subscribe',
        },
      ],
    },
  ];
}
