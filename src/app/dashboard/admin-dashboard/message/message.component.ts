import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Message {
  id: number;
  sender: string;
  recipient: string;
  subject: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  priority: 'Low' | 'Normal' | 'High';
}

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  messages: Message[] = [
    {
      id: 1,
      sender: 'Dr. Smith',
      recipient: 'All Students',
      subject: 'Mathematics Class Schedule Change',
      content: 'Due to unforeseen circumstances, tomorrow\'s mathematics class will be held at 2:00 PM instead of 10:00 AM.',
      timestamp: '2024-01-15 08:30',
      isRead: false,
      priority: 'High'
    },
    {
      id: 2,
      sender: 'Prof. Johnson',
      recipient: 'Physics Class',
      subject: 'Lab Equipment Update',
      content: 'New lab equipment has been installed. Please review the safety guidelines before next week\'s session.',
      timestamp: '2024-01-14 16:45',
      isRead: true,
      priority: 'Normal'
    },
    {
      id: 3,
      sender: 'Dr. Brown',
      recipient: 'Chemistry Students',
      subject: 'Assignment Extension',
      content: 'The chemistry experiment report deadline has been extended to next Friday.',
      timestamp: '2024-01-13 12:15',
      isRead: true,
      priority: 'Normal'
    },
    {
      id: 4,
      sender: 'Ms. Davis',
      recipient: 'Computer Science Class',
      subject: 'Project Guidelines',
      content: 'Updated project guidelines have been posted. Please review them before starting your work.',
      timestamp: '2024-01-12 09:20',
      isRead: false,
      priority: 'Low'
    }
  ];

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'High':
        return 'text-danger';
      case 'Normal':
        return 'text-warning';
      case 'Low':
        return 'text-success';
      default:
        return '';
    }
  }

  markAsRead(message: Message): void {
    message.isRead = true;
  }

  getUnreadCount(): number {
    return this.messages.filter(msg => !msg.isRead).length;
  }
}
