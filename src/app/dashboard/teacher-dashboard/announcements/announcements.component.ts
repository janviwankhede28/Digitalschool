import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Announcement {
  id: number;
  title: string;
  description: string;
  category: string;
  image?: string;
  date: Date;
}

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.css'
})
export class AnnouncementsComponent {
  showForm = false;

  form: Partial<Announcement> = {
    title: '',
    description: '',
    category: ''
  };

  announcements: Announcement[] = [
    {
      id: 1,
      title: 'Exam Schedule Released',
      description: 'Mid-term exams will begin from October 25th. Check timetable for details.',
      category: 'Exam',
      date: new Date('2025-10-21')
    },
    {
      id: 2,
      title: 'Diwali Holiday Notice',
      description: 'School will remain closed from Nov 1st to Nov 5th for Diwali vacation.',
      category: 'Holiday',
      date: new Date('2025-10-20')
    }
  ];

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.form.image = file.name;
    }
  }

  addAnnouncement() {
    if (!this.form.title || !this.form.category || !this.form.description) return;

    const newAnn: Announcement = {
      id: Date.now(),
      title: this.form.title!,
      description: this.form.description!,
      category: this.form.category!,
      image: this.form.image,
      date: new Date()
    };

    this.announcements.unshift(newAnn);
    alert('📢 Announcement Posted Successfully!');
    this.resetForm();
    this.showForm = false;
  }

  resetForm() {
    this.form = { title: '', description: '', category: '' };
  }
}