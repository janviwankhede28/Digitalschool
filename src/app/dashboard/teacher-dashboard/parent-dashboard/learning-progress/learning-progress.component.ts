import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learning-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learning-progress.component.html',
  styleUrls: ['./learning-progress.component.css']
})
export class LearningProgressComponent {
  parentName = 'Mr./Ms. Wankhede';
  studentName = 'Janvi Wankhede';

  subjects = [
    { name: 'Mathematics', progress: 85 },
    { name: 'Science', progress: 70 },
    { name: 'English', progress: 90 },
    { name: 'History', progress: 60 },
    { name: 'Art', progress: 75 }
  ];
subject: any;

  get averageProgress() {
    const total = this.subjects.reduce((sum, sub) => sum + sub.progress, 0);
    return Math.round(total / this.subjects.length);
  }
}
