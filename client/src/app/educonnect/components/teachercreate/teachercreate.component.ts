import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teacher } from '../../models/Teacher';

@Component({
  selector: 'app-teachercreate',
  templateUrl: './teachercreate.component.html',
  styleUrls: ['./teachercreate.component.scss']
})
export class TeacherCreateComponent {

  teacherForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.teacherForm = this.fb.group({
        teacherId: [0], 
      fullName: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      yearsOfExperience: [0, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    this.successMessage = null;
    this.errorMessage = null;

    if (this.teacherForm.valid) {
      const formValue = this.teacherForm.value;

      const teacher = new Teacher(
        0,
        formValue.fullName,
        formValue.contactNumber,
        formValue.email,
        formValue.subject,
        formValue.yearsOfExperience
      );

      this.successMessage = 'Teacher created successfully!';
      console.log(teacher);
    } else {
      this.errorMessage = 'Please fill all required fields correctly!';
    }
  }

  resetForm(): void {
    this.teacherForm.reset({
      fullName: '',
      contactNumber: '',
      email: '',
      subject: '',
      yearsOfExperience: 1
    });

    this.successMessage = null;
    this.errorMessage = null;
  }
}