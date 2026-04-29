import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from '../../models/Course';

@Component({
    selector: 'app-coursecreate',
    templateUrl: './coursecreate.component.html',
    styleUrls: ['./coursecreate.component.scss']
})
export class CourseCreateComponent {

    courseForm: FormGroup;
    successMessage: string | null = null;
    errorMessage: string | null = null;

    constructor(private fb: FormBuilder) {
        this.courseForm = this.fb.group({
            courseId: [0],
            courseName: ['', Validators.required],
            description: ['', [Validators.maxLength(500)]],
            teacherId: [null, Validators.required]
        });
    }

    onSubmit(): void {
        this.successMessage = null;
        this.errorMessage = null;

        if (this.courseForm.valid) {
            const formValue = this.courseForm.value;

            const course = new Course(
                0,
                formValue.courseName,
                formValue.description,
                formValue.teacherId
            );

            this.successMessage = 'Course created successfully!';
            console.log(course);
        } else {
            this.errorMessage = 'Please fill all required fields correctly!';
        }
    }

    resetForm(): void {
        this.courseForm.reset({
            courseName: '',
            description: '',
            teacherId: ''
        });

        this.successMessage = null;
        this.errorMessage = null;
    }
}