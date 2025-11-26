import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as AOS from 'aos';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,
    FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courses = [
    {
      title: 'Mathematics',
      grade: 'Class 1–10',
      lessons: 120,
      description: 'Interactive lessons, problem-solving quizzes, and visual explanations.',
      image: 'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Science',
      grade: 'Class 6–10',
      lessons: 90,
      description: 'Explore Physics, Chemistry, and Biology through animated videos.',
      image: 'https://media.istockphoto.com/id/1287582736/photo/robot-humanoid-use-laptop-and-sit-at-table-for-big-data-analytic.webp?a=1&b=1&s=612x612&w=0&k=20&c=F20ufOpQFFYfnJNNNiAbSFmP2JC5fc9WlNNz3ICih-Q='
    },
    {
      title: 'English Grammar',
      grade: 'Class 1–10',
      lessons: 85,
      description: 'Enhance grammar, comprehension, and writing skills with fun exercises.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Environmental Studies',
      grade: 'Class 1–5',
      lessons: 60,
      description: 'Learn about nature, pollution, and sustainability with visual learning.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Social Science',
      grade: 'Class 6–10',
      lessons: 70,
      description: 'Understand history, geography, and civics through maps and activities.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Computer Science',
      grade: 'Class 6–10',
      lessons: 100,
      description: 'Learn the fundamentals of coding, logic, and AI through projects.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Hindi',
      grade: 'Class 1–10',
      lessons: 80,
      description: 'Improve reading, writing, and poetry appreciation with stories and exercises.',
      image: 'https://images.unsplash.com/photo-1657302155485-790b74d0b5d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhpbmRpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600'
    },
    {
      title: 'Marathi',
      grade: 'Class 1–10',
      lessons: 75,
      description: 'Master Marathi literature, grammar, and storytelling through visuals.',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Art & Drawing',
      grade: 'Class 1–8',
      lessons: 50,
      description: 'Creative art lessons with step-by-step drawing tutorials.',
      image: 'https://images.unsplash.com/photo-1500336624523-d727130c3328?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Physical Education',
      grade: 'Class 1–10',
      lessons: 40,
      description: 'Fitness, yoga, and health education for overall development.',
      image: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Moral Science',
      grade: 'Class 1–8',
      lessons: 30,
      description: 'Stories and activities to build ethics, kindness, and empathy.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'AI & Robotics (Advanced)',
      grade: 'Class 9–10',
      lessons: 25,
      description: 'Hands-on learning of AI, robotics, and machine learning basics.',
      image: 'https://media.istockphoto.com/id/1287582736/photo/robot-humanoid-use-laptop-and-sit-at-table-for-big-data-analytic.webp?a=1&b=1&s=612x612&w=0&k=20&c=F20ufOpQFFYfnJNNNiAbSFmP2JC5fc9WlNNz3ICih-Q='
    }
  ];

  filteredCourses = [...this.courses];
  searchText = '';

  ngOnInit(): void {
    AOS.init({ duration: 900, once: true, easing: 'ease-in-out' });
  }

  filterCourses(): void {
    const term = this.searchText.toLowerCase();
    this.filteredCourses = this.courses.filter(c =>
      c.title.toLowerCase().includes(term) || c.description.toLowerCase().includes(term)
    );
  }

  viewCourse(course: any): void {
    alert(`You selected: ${course.title}`);
  }
}