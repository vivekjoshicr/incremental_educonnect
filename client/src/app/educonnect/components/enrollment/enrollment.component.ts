import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-enrollment',
    templateUrl: './enrollment.component.html',
    styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent {

    enrollmentForm: FormGroup;
    successMessage: string | null = null;
    errorMessage: string | null = null;

    constructor(private fb: FormBuilder) {

        this.enrollmentForm = this.fb.group({
            enrollmentId: [null],
            studentId: [null, Validators.required],
            courseId: [null, Validators.required],
            enrollmentDate: [null, Validators.required]
        });
    }

    onSubmit(): void {
        this.successMessage = null;
        this.errorMessage = null;

        if (this.enrollmentForm.valid) {
            const enrollment = this.enrollmentForm.value;

            console.log('Enrollment added:', enrollment);

            this.successMessage = 'Enrollment added successfully!';
            this.resetForm();
        } else {
            this.errorMessage = 'Please fill all required fields!';
        }
    }

    resetForm(): void {
        this.enrollmentForm.reset({

            enrollmentId: null,
            studentId: null,
            courseId: null,
            enrollmentDate: null
        });

        this.successMessage = null;
        this.errorMessage = null;
    }
}