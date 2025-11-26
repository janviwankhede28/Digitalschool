import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-admission',
  standalone: true,
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css'],
  imports: [ReactiveFormsModule, NgIf, NavbarComponent, FooterComponent]
})
export class AdmissionComponent {
fileError: any;
onFileSelect($event: Event) {
throw new Error('Method not implemented.');
}
  admissionForm!: FormGroup;
  currentStep = 1;
  progress = 0;
  minDate: string = '';
isFileValid: any;
selectedFiles: any;

  constructor(private fb: FormBuilder) {
    this.createForm();
    // 📅 Today’s date (YYYY-MM-DD)
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  // ✅ Custom validator for preventing past dates
  static noPastDate(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      return { pastDate: true };
    }
    return null;
  }

  createForm() {
    this.admissionForm = this.fb.group({
      studentName: ['', Validators.required],
      dob: ['', [Validators.required, AdmissionComponent.noPastDate]], // 🚫 No past DOB
      gender: ['', Validators.required],
      grade: ['', Validators.required],
      parentName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // ✅ 10 digits only
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      specialNote: ['']
    });
  }

  nextStep() {
    if (this.admissionForm.invalid) {
      this.admissionForm.markAllAsTouched(); // 🔥 Show all errors
      return;
    }
    if (this.currentStep < 4) {
      this.currentStep++;
      this.progress = (this.currentStep - 1) * 33;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.progress = (this.currentStep - 1) * 33;
    }
  }

  onSubmit() {
    if (this.admissionForm.valid) {
      console.log('Form Submitted:', this.admissionForm.value);
      this.nextStep();
    } else {
      this.admissionForm.markAllAsTouched();
    }
  }
}
