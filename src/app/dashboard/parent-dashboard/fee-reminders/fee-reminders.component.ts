import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface FeeReminder {
  id: number;
  studentName: string;
  className: string;
  dueDate: string; // ISO date or friendly string
  amount: number;
  status: 'PENDING' | 'PAID' | 'OVERDUE';
  notes?: string;
}

@Component({
  selector: 'app-fee-reminders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fee-reminders.component.html',
  styleUrl: './fee-reminders.component.css'
})
export class FeeRemindersComponent {
  reminders: FeeReminder[] = [
    { id: 1, studentName: 'Riya Sharma', className: 'Grade 4 - A', dueDate: '2025-11-05', amount: 2500, status: 'PENDING', notes: 'Monthly tuition' },
    { id: 2, studentName: 'Aman Verma', className: 'Grade 7 - B', dueDate: '2025-10-28', amount: 3200, status: 'OVERDUE', notes: 'Tuition + Lab fees' },
    { id: 3, studentName: 'Meera Joshi', className: 'KG', dueDate: '2025-11-12', amount: 1800, status: 'PENDING', notes: 'Admission fee part' },
  ];

  selected?: FeeReminder;
  showModal = false;
a: ((a: FeeReminder,b: FeeReminder) => number)|undefined;

  openDetails(reminder: FeeReminder) {
    this.selected = reminder;
    this.showModal = true;
    // optional: mark as seen / log, call API etc.
  }

  closeModal() {
    this.showModal = false;
    this.selected = undefined;
  }

  markPaid(reminder: FeeReminder) {
    const idx = this.reminders.findIndex(r => r.id === reminder.id);
    if (idx !== -1) {
      this.reminders[idx] = { ...this.reminders[idx], status: 'PAID' };
    }
    // If you have backend: call API here to update
    this.closeModal();
  }
sortReminders() {
  this.reminders = this.reminders.sort((a,b)=>a.dueDate.localeCompare(b.dueDate));
}

  sendReminder(reminder: FeeReminder) {
    // Simulate an action: e.g., call API to send SMS/email
    alert(`Reminder sent to parent of ${reminder.studentName} for ₹${reminder.amount}.`);
  }

  statusBadgeClass(status: FeeReminder['status']) {
    return {
      'badge bg-warning text-dark': status === 'PENDING',
      'badge bg-success': status === 'PAID',
      'badge bg-danger': status === 'OVERDUE'
    };
  }

  // small utility to format date
  formatDate(d: string) {
    return new Date(d).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  }
}
