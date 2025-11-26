import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent {

  // ===== Carousel Images =====
  carouselImages = [
    {
      img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80',
      title: 'Smart Learning Experience',
      desc: 'Empowering students with AI-driven and interactive academic tools.'
    },
    {
      img: 'https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&w=1600&q=80',
      title: 'Digital Classrooms',
      desc: 'Modern, multimedia-powered classrooms for every grade.'
    },
    {
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
      title: 'Academic Growth & Reports',
      desc: 'Track learning progress with interactive dashboards and reports.'
    }
  ];

  // ===== Academic Cards =====
  academicItems = [
    {
      title: 'Curriculum',
      desc: 'Smart, syllabus-aligned learning with AI insights and adaptive tests.',
      img: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80',
      icon: 'bi bi-journal-richtext'
    },
    {
      title: 'Digital Library',
      desc: 'Access thousands of eBooks, notes, and PDFs anytime, anywhere.',
      img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80',
      icon: 'bi bi-book-half'
    },
    {
      title: 'Study Materials',
      desc: 'Get high-quality worksheets, assignments, and practice sets.',
      img: 'https://media.istockphoto.com/id/1290864946/photo/e-learning-education-concept-learning-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=WvdCbH9aoTMldDRpCq0qWTrVpRTcMU0HdcytDSy2y-Q=',
      icon: 'bi bi-file-earmark-text'
    },
    {
      title: 'Multimedia Content',
      desc: 'Watch engaging video lectures, animations, and listen to stories.',
      img: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
      icon: 'bi bi-play-circle'
    },
    {
      title: 'Homework Tracker',
      desc: 'Easily submit, check, and track homework and assignments online.',
      img: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80',
      icon: 'bi bi-clipboard-check'
    },
    {
      title: 'Progress & Reports',
      desc: 'Access analytics-based student progress and exam performance.',
      img: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=80',
      icon: 'bi bi-graph-up-arrow'
    }
  ];

  // ===== Timetable =====
  timetable = [
    { time: '9:00 - 10:00', mon: 'Math', tue: 'Science', wed: 'English', thu: 'Math', fri: 'Computer' },
    { time: '10:00 - 11:00', mon: 'English', tue: 'Math', wed: 'Science', thu: 'Social', fri: 'Art' },
    { time: '11:15 - 12:15', mon: 'Science', tue: 'Social', wed: 'Math', thu: 'English', fri: 'Games' },
    { time: '12:15 - 1:00', mon: 'Lunch', tue: 'Lunch', wed: 'Lunch', thu: 'Lunch', fri: 'Lunch' },
    { time: '1:00 - 2:00', mon: 'Computer', tue: 'Art', wed: 'Math', thu: 'Science', fri: 'English' }
  ];

 // ===== Video Gallery (with proper thumbnails + working YouTube embeds) =====
videos = [
  {
    title: 'Mathematics – Algebra Basics',
    link: 'https://www.youtube.com/embed/8XcQnT1tVlw',
    img: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png'
  },
  {
    title: 'Science – Solar System Explained',
    link: 'https://www.youtube.com/embed/libKVRa01L8',
    img: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png'
  },
  {
    title: 'English Grammar – Tenses',
    link: 'https://www.youtube.com/embed/YK6Ygkz6jVY',
    img: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png'
  }
];

// ===== Gamified Badges (updated with beautiful transparent icons) =====
badges = [
  {
    name: 'Math Champion',
    desc: 'Awarded for consistent excellence in mathematics.',
    img: 'https://cdn-icons-png.flaticon.com/512/2278/2278992.png'
  },
  {
    name: 'Science Star',
    desc: 'Outstanding performance in science and innovation.',
    img: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png'
  },
  {
    name: 'Creative Learner',
    desc: 'Exceptional creativity and imagination in learning.',
    img: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png'
  },
  {
    name: 'Perfect Attendance',
    desc: 'Maintaining 100% attendance across all sessions.',
    img: 'https://cdn-icons-png.flaticon.com/512/2584/2584690.png'
  }
];

  // ===== Achievements =====
  achievements = [
    {
      title: 'Top 10 Rank Holders',
      desc: 'Students achieving more than 95% in annual exams.',
      img: 'https://media.istockphoto.com/id/466899419/photo/top-10.webp?a=1&b=1&s=612x612&w=0&k=20&c=pVhMSxwwlRY_Zz1V4UCsC5H7vhuN2Yk9Y0xq8CGitoY='
    },
    {
      title: 'Science Fair Winners',
      desc: 'Innovation and excellence showcased in school science fairs.',
      img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Debate Competition',
      desc: 'Winners of inter-school debate championship 2025.',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Sports Day Champions',
      desc: 'Victory in annual inter-house sports competitions.',
      img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80'
    }
  ];
currentVideo: any;
}
