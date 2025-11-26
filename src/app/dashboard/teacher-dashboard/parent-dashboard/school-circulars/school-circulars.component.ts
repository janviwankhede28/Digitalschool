import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Circular {
  date: Date;
  title: string;
  description: string;
  postedBy: string;
  downloadUrl?: string;
}

@Component({
  selector: 'app-school-circulars',
  templateUrl: './school-circulars.component.html',
  styleUrls: ['./school-circulars.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SchoolCircularsComponent {
  circulars: Circular[] = [
    {
      date: new Date('2025-10-01'),
      title: 'Annual Sports Day',
      description: 'All parents are invited to join our Annual Sports Day event at the school grounds.',
      postedBy: 'Principal',
      downloadUrl: 'https://example.com/sportsday.pdf'
    },
    {
      date: new Date('2025-09-20'),
      title: 'Parent-Teacher Meeting',
      description: 'The next PTM is scheduled for October 10th. Please confirm your attendance.',
      postedBy: 'Class Teacher'
    },
    {
      date: new Date('2025-09-15'),
      title: 'New Library Rules',
      description: 'Updated rules for library usage have been implemented. Students and parents must read them.',
      postedBy: 'Library Incharge',
      downloadUrl: 'https://example.com/library-rules.pdf'
    },
    {
      date: new Date('2025-10-05'),
      title: 'Science Exhibition',
      description: 'Students are invited to participate in the Annual Science Exhibition. Registration required.',
      postedBy: 'Science Department',
      downloadUrl: 'https://example.com/science-expo.pdf'
    },
    {
      date: new Date('2025-10-10'),
      title: 'Art Competition',
      description: 'An inter-class art competition will be held. All students can submit their entries.',
      postedBy: 'Art Teacher'
    },
    {
      date: new Date('2025-10-12'),
      title: 'Holiday Notice',
      description: 'School will remain closed on October 15th due to a local festival.',
      postedBy: 'Admin Office'
    }
  ];
}
