import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Student {
  id: number;
  name: string;
  roll: string;
  grade: string;
  section: string;
  phone: string;
}
@Component({
  selector: 'app-manage-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-student.component.html',
  styleUrl: './manage-student.component.css'
})
export class ManageStudentComponent {

  search = '';
  students: Student[] = [
    { id: 1, name: 'Amit Patel', roll: '01', grade: '10', section: 'A', phone: '9876543210' },
    { id: 2, name: 'Meera Joshi', roll: '02', grade: '9', section: 'B', phone: '9823456789' }
  ];
  editing: Student | null = null;

  filteredStudents() {
    return this.students.filter(s => s.name.toLowerCase().includes(this.search.toLowerCase()));
  }

  openAdd() {
    this.editing = { id: 0, name: '', roll: '', grade: '', section: '', phone: '' };
  }

  edit(s: Student) {
    this.editing = { ...s };
  }

  closeEdit() {
    this.editing = null;
  }

  save() {
    if (!this.editing) return;
    if (this.editing.id === 0) {
      this.editing.id = Date.now();
      this.students.push(this.editing);
    } else {
      const idx = this.students.findIndex(st => st.id === this.editing!.id);
      if (idx > -1) this.students[idx] = this.editing;
    }
    this.closeEdit();
  }

  remove(s: Student) {
    if (confirm(`Delete ${s.name}?`)) {
      this.students = this.students.filter(st => st.id !== s.id);
    }
  }
}