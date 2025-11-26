import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-syllabus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent {
  syllabusList = [
    { std: 'Std - 1 (Notes)', link: 'https://drive.google.com/file/d/STD1_LINK/view' },
    { std: 'Std - 2 (Notes)', link: 'https://drive.google.com/file/d/STD2_LINK/view' },
    { std: 'Std - 3 (Notes)', link: 'https://drive.google.com/file/d/STD3_LINK/view' },
    { std: 'Std - 4 (Notes)', link: 'https://drive.google.com/file/d/STD4_LINK/view' },
    { std: 'Std - 5 (Notes)', link: 'https://drive.google.com/file/d/STD5_LINK/view' },
    { std: 'Std - 6 (Notes)', link: 'https://drive.google.com/file/d/STD6_LINK/view' },
    { std: 'Std - 7 (Notes)', link: 'https://drive.google.com/file/d/STD7_LINK/view' },
    { std: 'Std - 8 (Notes)', link: 'https://drive.google.com/file/d/STD8_LINK/view' },
    { std: 'Std - 9 (Notes)', link: 'https://drive.google.com/file/d/STD9_LINK/view' },
    { std: 'Std - 10 (Notes)', link: 'https://drive.google.com/file/d/STD10_LINK/view' }
  ];

  openSyllabus(link: string) {
    window.open(link, '_blank'); // Opens the syllabus in a new tab
  }
}
