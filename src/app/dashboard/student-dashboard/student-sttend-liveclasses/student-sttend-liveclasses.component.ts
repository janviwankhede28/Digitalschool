import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-sttend-liveclasses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-sttend-liveclasses.component.html',
  styleUrl: './student-sttend-liveclasses.component.css'
})
export class StudentSttendLiveclassesComponent {
 searchText: string = '';
  selectedClass: any = null;

  liveClasses = [
    {
      title: 'Mathematics - Algebra Session',
      instructor: 'Mr. John Smith',
      time: '10:00 AM - 11:00 AM | Oct 20, 2025',
      isLive: true,
      image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=60',
      description: 'Learn Algebra concepts, equations, and problem-solving techniques.'
    },
    {
      title: 'Physics - Mechanics',
      instructor: 'Dr. Emily Carter',
      time: '2:00 PM - 3:00 PM | Oct 21, 2025',
      isLive: false,
      image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=60',
      description: 'Explore motion, force, and energy with interactive examples.'
    },
    {
      title: 'English Literature - Poetry',
      instructor: 'Ms. Laura Brown',
      time: '4:30 PM - 5:30 PM | Oct 22, 2025',
      isLive: false,
      image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=60',
      description: 'Understand the beauty of English poetry and writing techniques.'
    }
  ];

  filteredClasses = [...this.liveClasses];

  filterClasses() {
    const search = this.searchText.toLowerCase();
    this.filteredClasses = this.liveClasses.filter(
      (c) =>
        c.title.toLowerCase().includes(search) ||
        c.instructor.toLowerCase().includes(search)
    );
  }

  showDetails(c: any) {
    this.selectedClass = c;
    const modal = new (window as any).bootstrap.Modal(document.getElementById('detailsModal'));
    modal.show();
  }

  joinClass(c: any) {
    alert(`Joining ${c.title}...`);
  }
}
