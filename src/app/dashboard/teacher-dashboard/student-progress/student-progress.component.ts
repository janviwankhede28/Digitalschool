import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Student {
  id: number;
  name: string;
  class: string;
}

interface SubjectProgress {
  subject: string;
  score: number;
}

interface ProgressData {
  subjects: SubjectProgress[];
  average: number;
  remark: string;
}
@Component({
  selector: 'app-student-progress',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-progress.component.html',
  styleUrl: './student-progress.component.css'
})
export class StudentProgressComponent {
  classes = ['8A', '9A', '10A'];
  selectedClass = '';
  selectedStudent = '';

  students: Student[] = [
    { id: 1, name: 'Amit Kumar', class: '10A' },
    { id: 2, name: 'Meera Joshi', class: '10A' },
    { id: 3, name: 'Ravi Deshmukh', class: '9A' },
    { id: 4, name: 'Pooja Sharma', class: '8A' },
  ];

  filteredStudents: Student[] = [];
  progressData: ProgressData | null = null;

  loadStudents() {
    this.filteredStudents = this.students.filter(s => s.class === this.selectedClass);
    this.selectedStudent = '';
    this.progressData = null;
  }

  generateProgress() {
    const mockScores = [80, 65, 90, 50, 70];
    const subjects = ['Math', 'Science', 'English', 'History', 'Computer'];
    const progress: SubjectProgress[] = subjects.map((subj, i) => ({
      subject: subj,
      score: mockScores[i]
    }));

    const avg = Math.round(
      progress.reduce((sum, p) => sum + p.score, 0) / progress.length
    );

    let remark = 'Excellent';
    if (avg < 75 && avg >= 50) remark = 'Average';
    else if (avg < 50) remark = 'Needs Improvement';

    this.progressData = {
      subjects: progress,
      average: avg,
      remark
    };
  }
}