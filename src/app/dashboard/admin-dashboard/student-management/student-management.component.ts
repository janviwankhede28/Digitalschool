import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {

  students: any[] = [];

  showForm = false;
  isEdit = false;
  message = '';

  studentData: any = { 
    id: '', 
    name: '', 
    course: '', 
    email: '', 
    contact: '', 
    enrollmentDate: '', 
    status: 'Active' 
  };

  ngOnInit() {
    const stored = localStorage.getItem('students');
    if (stored) {
      this.students = JSON.parse(stored);
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(this.students));
  }

  toggleForm() {
    this.showForm = !this.showForm;
    this.isEdit = false;
    this.message = '';
    this.studentData = { id: '', name: '', course: '', email: '', contact: '', enrollmentDate: '', status: 'Active' };
  }

  saveStudent(form: NgForm) {
    if (!form.valid) {
      this.message = "Please fill all fields correctly!";
      return;
    }

    // Mobile validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(this.studentData.contact)) {
      this.message = 'Enter a valid 10-digit mobile number!';
      return;
    }

    if (this.isEdit) {
      const index = this.students.findIndex(s => s.id === this.studentData.id);
      if (index !== -1) this.students[index] = { ...this.studentData };

      this.message = 'Student updated successfully!';
    } else {
      this.studentData.id = Date.now(); // unique ID
      this.students.push({ ...this.studentData });
      this.message = 'Student added successfully!';
    }

    this.saveToLocalStorage();
    this.toggleForm();
  }

  editStudent(student: any) {
    this.studentData = { ...student };
    this.showForm = true;
    this.isEdit = true;
  }

  deleteStudent(id: number) {
    const confirmDelete = confirm('Are you sure to delete this student?');
    if (confirmDelete) {
      this.students = this.students.filter(s => s.id !== id);
      this.saveToLocalStorage();
      this.message = 'Student deleted successfully!';
    }
  }

}
