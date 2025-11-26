import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Submission {
  id: number;
  student: string;
  assignment: string;
  submittedAt: Date;
  status: 'Pending' | 'Reviewed';
  feedback?: string;
}
@Component({
  selector: 'app-check-assignment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './check-assignment.component.html',
  styleUrl: './check-assignment.component.css'
})
export class CheckAssignmentComponent {

  assignments = ['Math Homework', 'Science Project', 'English Essay'];
  selectedAssignment = '';

  submissions: Submission[] = [
    {
      id: 1,
      student: 'Amit Kumar',
      assignment: 'Math Homework',
      submittedAt: new Date('2025-10-21T09:30'),
      status: 'Pending'
    },
    {
      id: 2,
      student: 'Meera Joshi',
      assignment: 'Science Project',
      submittedAt: new Date('2025-10-22T11:15'),
      status: 'Reviewed',
      feedback: 'Excellent work!'
    },
    {
      id: 3,
      student: 'Ravi Deshmukh',
      assignment: 'English Essay',
      submittedAt: new Date('2025-10-23T08:50'),
      status: 'Pending'
    }
  ];

  filteredSubmissions() {
    return this.selectedAssignment
      ? this.submissions.filter(s => s.assignment === this.selectedAssignment)
      : this.submissions;
  }

  viewSubmission(s: Submission) {
    alert(`📄 Viewing submission for ${s.student}\nAssignment: ${s.assignment}`);
  }

  markReviewed(s: Submission) {
    s.status = 'Reviewed';
    alert(`✅ Marked as reviewed for ${s.student}`);
  }

  giveFeedback(s: Submission) {
    const fb = prompt(`Enter feedback for ${s.student}:`, s.feedback || '');
    if (fb !== null) s.feedback = fb;
  }
}