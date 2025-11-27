import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClassSectionService } from '../../../class-section.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class-section',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './class-section.component.html',
  styleUrls: ['./class-section.component.css']
})
export class ClassSectionComponent {
setUpdate(_t96: any) {
throw new Error('Method not implemented.');
}

  classForm!: FormGroup;
  sectionForm!: FormGroup;
  updateSectionForm!: FormGroup;
allSections: any;

  constructor(
    private fb: FormBuilder,
    private api: ClassSectionService
  ) {}

  ngOnInit() {

    // Create Class Form
    this.classForm = this.fb.group({
      className: ['', Validators.required],
      description: ['']
    });

    // Create Section Form
    this.sectionForm = this.fb.group({
      classId: ['', Validators.required],
      sectionName: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.min(1)]]
    });

    // Update Section Form
    this.updateSectionForm = this.fb.group({
      sectionId: ['', Validators.required],
      sectionName: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.min(1)]]
    });
  }

  // CREATE CLASS
  createClass() {
    console.log("Class Payload:", this.classForm.value);

    this.api.createClass(this.classForm.value).subscribe({
      next: () => alert("Class Created Successfully"),
      error: (err) => {
        console.error("Class Error:", err);
        alert("Class Error: " + JSON.stringify(err.error));
      }
    });
  }

  // CREATE SECTION
  createSection() {
    const classId = this.sectionForm.value.classId;

    const data = {
      sectionName: this.sectionForm.value.sectionName,
      capacity: this.sectionForm.value.capacity
    };

    console.log("Section Payload:", data);
    console.log("Class ID:", classId);

    this.api.createSection(classId, data).subscribe({
      next: () => alert("Section Created Successfully"),
      error: (err) => {
        console.error("Section Create Error:", err);
        alert("Section Create Error: " + JSON.stringify(err.error));
      }
    });
  }

  // UPDATE SECTION
  updateSection() {
    const sectionId = this.updateSectionForm.value.sectionId;

    const updateData = {
      sectionName: this.updateSectionForm.value.sectionName,
      capacity: this.updateSectionForm.value.capacity
    };

    console.log("Update Payload:", updateData);

    this.api.updateSection(sectionId, updateData).subscribe({
      next: () => alert("Section Updated Successfully"),
      error: (err) => {
        console.error("Update Error:", err);
        alert("Section Update Error: " + JSON.stringify(err.error));
      }
    });
  }

  // DELETE SECTION
  deleteSection(sectionId: number) {
    if (!confirm("Are you sure you want to delete this section?")) return;

    this.api.deleteSection(sectionId).subscribe({
      next: () => alert("Section Deleted"),
      error: (err) => console.error("Delete Error:", err)
    });
  }
}
