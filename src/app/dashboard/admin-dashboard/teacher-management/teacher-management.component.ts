import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teacher-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './teacher-management.component.html',
  styleUrls: ['./teacher-management.component.css']
})
export class TeacherManagementComponent {
  teachers = [
    { id: 1, loginId: 'TCH001', username: 'ankit123', password: '123456', email: 'ankit@gmail.com', phone: '9876543210' },
    { id: 2, loginId: 'TCH002', username: 'pooja456', password: 'abcdef', email: 'pooja@gmail.com', phone: '8765432109' }
  ];

  showModal = false;
  showDeleteConfirm = false;
  showPassword = false;
  showSuccess = false;
  successMessage = '';

  isEditMode = false;
  editId: number | null = null;
  deleteId: number | null = null;

  newTeacher = { loginId: '', username: '', password: '', email: '', phone: '' };

  // ✅ Open Add/Edit Modal
  openModal(editTeacher: any = null) {
    if (editTeacher) {
      this.isEditMode = true;
      this.editId = editTeacher.id;
      this.newTeacher = { ...editTeacher };
    } else {
      this.isEditMode = false;
      this.newTeacher = { loginId: '', username: '', password: '', email: '', phone: '' };
    }
    this.showModal = true;
  }

  // ✅ Close Modal
  closeModal() {
    this.showModal = false;
  }

  // ✅ Add or Update Teacher
  saveTeacher() {
    if (this.isEditMode && this.editId !== null) {
      const index = this.teachers.findIndex(t => t.id === this.editId);
      if (index !== -1) this.teachers[index] = { id: this.editId, ...this.newTeacher };
      this.showPopup('Teacher updated successfully!');
    } else {
      const newId = this.teachers.length ? this.teachers[this.teachers.length - 1].id + 1 : 1;
      this.teachers.push({ id: newId, ...this.newTeacher });
      this.showPopup('Teacher added successfully!');
    }
    this.closeModal();
  }

  // ✅ Open Delete Confirmation
  confirmDelete(id: number) {
    this.deleteId = id;
    this.showDeleteConfirm = true;
  }

  // ✅ Delete Teacher
  deleteTeacher() {
    if (this.deleteId !== null) {
      this.teachers = this.teachers.filter(t => t.id !== this.deleteId);
      this.showPopup('Teacher deleted successfully!');
    }
    this.showDeleteConfirm = false;
    this.deleteId = null;
  }

  cancelDelete() {
    this.showDeleteConfirm = false;
  }

  // ✅ Toggle password visibility
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // ✅ Show success popup
  showPopup(message: string) {
    this.successMessage = message;
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }
}
