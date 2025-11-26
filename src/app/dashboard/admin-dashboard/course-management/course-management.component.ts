import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Course {
  id?: number;
  name: string;
  category: string;
  duration: string;
  students: number;
  progress: number;
}

@Component({
  selector: 'app-course-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent {

  // ✅ Load courses from localStorage OR use default data
  courses: Course[] = JSON.parse(localStorage.getItem('courses') || '[]').length
    ? JSON.parse(localStorage.getItem('courses') || '[]')
    : [
        { id: 1, name: 'Mathematics', category: 'Academic', duration: '6 Months', students: 120, progress: 85 },
        { id: 2, name: 'Science', category: 'Academic', duration: '5 Months', students: 98, progress: 70 },
        { id: 3, name: 'Sports Training', category: 'Sports', duration: '3 Months', students: 76, progress: 50 }
      ];

  newCourse: Course = { name: '', category: '', duration: '', students: 0, progress: 0 };
  showCourseModal = false;
  isEditMode = false;
  selectedIndex: number | null = null;

  // ✅ Update LocalStorage
  saveToLocal() {
    localStorage.setItem('courses', JSON.stringify(this.courses));
  }

  openAddCourseModal() {
    this.isEditMode = false;
    this.resetForm();
    this.showCourseModal = true;
  }

  openEditCourseModal(course: Course, index: number) {
    this.isEditMode = true;
    this.selectedIndex = index;
    this.newCourse = { ...course };
    this.showCourseModal = true;
  }

  closeCourseModal() {
    this.showCourseModal = false;
    this.resetForm();
  }

  saveCourse() {
    if (
      !this.newCourse.name ||
      !this.newCourse.category ||
      !this.newCourse.duration ||
      this.newCourse.students <= 0 ||
      this.newCourse.progress < 0 ||
      this.newCourse.progress > 100
    ) {
      alert("Please fill all fields correctly!");
      return;
    }

    if (this.isEditMode && this.selectedIndex !== null) {
      this.courses[this.selectedIndex] = { ...this.newCourse };
    } else {
      this.newCourse.id = this.courses.length + 1;
      this.courses.push({ ...this.newCourse });
    }

    // ✅ Save to localStorage after add/update
    this.saveToLocal();
    this.closeCourseModal();
  }

  deleteCourse(index: number) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courses.splice(index, 1);

      // ✅ Save to localStorage after delete
      this.saveToLocal();
    }
  }

  resetForm() {
    this.newCourse = { name: '', category: '', duration: '', students: 0, progress: 0 };
    this.selectedIndex = null;
  }
}
