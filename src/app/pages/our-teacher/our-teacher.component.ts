import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-teacher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-teacher.component.html',
  styleUrl: './our-teacher.component.css'
})
export class OurTeacherComponent {
 teachers = [
    {
      name: 'Angela T. Vigil',
      role: 'Associate Professor',
      image: 'assets/01(2).jpg',
      socials: [
       { icon: 'bi bi-facebook', link: '#' },
        { icon: 'bi bi-whatsapp', link: '#' },
        { icon: 'bi bi-linkedin', link: '#' },
        { icon: 'bi bi-youtube', link: '#' }
      ]
    },
    {
      name: 'Frank A. Mitchell',
      role: 'Associate Professor',
      image: 'assets/01(2).jpg',
      socials: [
         { icon: 'bi bi-facebook', link: '#' },
        { icon: 'bi bi-whatsapp', link: '#' },
        { icon: 'bi bi-linkedin', link: '#' },
        { icon: 'bi bi-youtube', link: '#' }
      ]
    },
    {
      name: 'Susan D. Lunsford',
      role: 'CEO & Founder',
      image: 'assets/01(2).jpg',
      socials: [
       { icon: 'bi bi-facebook', link: '#' },
        { icon: 'bi bi-whatsapp', link: '#' },
        { icon: 'bi bi-linkedin', link: '#' },
        { icon: 'bi bi-youtube', link: '#' }
      ]
    },
    {
      name: 'Dennis A. Pruitt',
      role: 'Associate Professor',
      image: 'assets/01(2).jpg',
      socials: [
        { icon: 'bi bi-facebook', link: '#' },
        { icon: 'bi bi-whatsapp', link: '#' },
        { icon: 'bi bi-linkedin', link: '#' },
        { icon: 'bi bi-youtube', link: '#' }
      ]
    }
  ];
}

