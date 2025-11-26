import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Student {
  id: number;
  name: string;
  roll: string;
  present: boolean;
}
@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent {
  classes = ['5A', '6A', '7A', '8A', '9A', '10A'];
  selectedClass = '';
  selectedDate = new Date().toISOString().substring(0, 10);

  students: Student[] = [
    { id: 1, name: 'Amit Kumar', roll: '01', present: true },
    { id: 2, name: 'Meera Joshi', roll: '02', present: true },
    { id: 3, name: 'Ravi Deshmukh', roll: '03', present: false },
    { id: 4, name: 'Pooja Sharma', roll: '04', present: true },
  ];

  saveAttendance() {
    const date = this.selectedDate;
    const presentCount = this.students.filter(s => s.present).length;
    alert(`✅ Attendance saved for ${this.selectedClass} on ${date}\nPresent: ${presentCount}/${this.students.length}`);
  }

  resetAttendance() {
    this.students.forEach(s => (s.present = false));
  }
}