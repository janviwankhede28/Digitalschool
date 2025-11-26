import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Exam {
  id?: number;
  name: string;
  subject: string;
  date: string;
  time: string;
  duration: string;
  class: string;
}

@Component({
  selector: 'app-exam-planner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exam-planner.component.html',
  styleUrl: './exam-planner.component.css'
})
export class ExamPlannerComponent {
  // Exam List
  exams: Exam[] = [
    { id: 1, name: 'Midterm Math Exam', subject: 'Mathematics', date: '2023-10-15', time: '10:00 AM', duration: '2 hours', class: 'Grade 10' },
    { id: 2, name: 'Science Final', subject: 'Science', date: '2023-11-20', time: '9:00 AM', duration: '3 hours', class: 'Grade 9' },
    { id: 3, name: 'English Quiz', subject: 'English', date: '2023-09-25', time: '11:00 AM', duration: '1 hour', class: 'Grade 8' }
  ];

  // New or Editing Exam
  newExam: Exam = { name: '', subject: '', date: '', time: '', duration: '', class: '' };

  // Control modal state
  showExamModal = false;

  // Edit mode flag
  isEditMode = false;

  // Selected index for edit
  selectedIndex: number | null = null;

  // ✅ Open modal for adding a new exam
  openAddExamModal() {
    this.isEditMode = false;
    this.resetForm();
    this.showExamModal = true;
  }

  // ✅ Open modal for editing an existing exam
  openEditExamModal(exam: Exam, index: number) {
    this.isEditMode = true;
    this.selectedIndex = index;
    this.newExam = { ...exam };
    this.showExamModal = true;
  }

  // ✅ Close modal
  closeExamModal() {
    this.showExamModal = false;
    this.resetForm();
  }

  // ✅ Add or Update Exam
  saveExam() {
    if (this.newExam.name.trim() === '') return;

    if (this.isEditMode && this.selectedIndex !== null) {
      // Update exam
      this.exams[this.selectedIndex] = { ...this.newExam };
    } else {
      // Add new exam
      this.newExam.id = this.exams.length + 1;
      this.exams.push({ ...this.newExam });
    }

    this.closeExamModal();
  }

  // ✅ Delete Exam
  deleteExam(index: number) {
    if (confirm('Are you sure you want to delete this exam?')) {
      this.exams.splice(index, 1);
    }
  }

  // ✅ Reset form
  resetForm() {
    this.newExam = { name: '', subject: '', date: '', time: '', duration: '', class: '' };
    this.selectedIndex = null;
  }
}
