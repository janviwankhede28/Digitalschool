import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent {
  programs = [
    { title: 'School', description: 'Providing a nurturing environment for academic excellence.', img: 'assets/school.jpg' },
    { title: 'Primary School', description: 'Building strong foundations for lifelong learning.', img: 'assets/primary.jpg' },
    { title: 'Sports', description: 'Encouraging teamwork, discipline, and physical fitness.', img: 'assets/sports.jpg' },
    { title: 'Extra Curricular Activities', description: 'Developing creativity and confidence beyond academics.', img: 'assets/extracurricular.jpg' },
    { title: 'Experienced Learning', description: 'Hands-on learning that bridges theory and practice.', img: 'assets/learning.jpg' }
  ];
}
