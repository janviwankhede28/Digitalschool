import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Assignment {
  id: number;
  title: string;
  desc: string;
  subject: string;
  classroom: string;
  dueDate: string;
  file?: string;
}
@Component({
  selector: 'app-create-assignment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-assignment.component.html',
  styleUrl: './create-assignment.component.css'
})
export class CreateAssignmentComponent {

  subjects = ['Mathematics', 'English', 'Science', 'Physics', 'History'];
  classes = ['5A', '6A', '7A', '8A', '9A', '10A'];

  form: Partial<Assignment> = {};
  assignments: Assignment[] = [];

  onFileSelect(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
      this.form.file = file.name;
    }
  }

  onSubmit() {
    if (!this.form.title || !this.form.subject || !this.form.classroom || !this.form.dueDate) return;

    const newAssignment: Assignment = {
      id: Date.now(),
      title: this.form.title!,
      desc: this.form.desc || '',
      subject: this.form.subject!,
      classroom: this.form.classroom!,
      dueDate: this.form.dueDate!,
      file: this.form.file
    };

    this.assignments.unshift(newAssignment);
    alert('✅ Assignment Created Successfully!');
    this.resetForm();
  }

  resetForm() {
    this.form = {};
  }
}