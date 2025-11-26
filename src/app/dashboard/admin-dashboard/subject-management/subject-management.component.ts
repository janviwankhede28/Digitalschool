import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-management',
  standalone: true,
  imports: [CommonModule, FormsModule], // 👈 ADD THIS LINE
  templateUrl: './subject-management.component.html',
  styleUrls: ['./subject-management.component.css']
})
export class SubjectManagementComponent {
  subjects: any[] = [];
  newSubject = { name: '', code: '', description: '' };
  isEditMode = false;
  selectedSubjectIndex: number | null = null;

  addSubject() {
    if (this.newSubject.name && this.newSubject.code) {
      this.subjects.push({ ...this.newSubject, id: this.subjects.length + 1 });
      this.newSubject = { name: '', code: '', description: '' };
    }
  }

  editSubject(subject: any, index: number) {
    this.newSubject = { ...subject };
    this.selectedSubjectIndex = index;
    this.isEditMode = true;
  }

  updateSubject() {
    if (this.selectedSubjectIndex !== null) {
      this.subjects[this.selectedSubjectIndex] = {
        ...this.newSubject,
        id: this.subjects[this.selectedSubjectIndex].id
      };
      this.isEditMode = false;
      this.newSubject = { name: '', code: '', description: '' };
      this.selectedSubjectIndex = null;
    }
  }

  deleteSubject(id: number) {
    this.subjects = this.subjects.filter(s => s.id !== id);
  }

  cancelEdit() {
    this.isEditMode = false;
    this.newSubject = { name: '', code: '', description: '' };
    this.selectedSubjectIndex = null;
  }
}
