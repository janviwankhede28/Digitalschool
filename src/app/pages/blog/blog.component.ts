import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

interface BlogPost {
  title: string;
  author: string;
  date: string;
  image: string;
  content: string;
  link: string; // 👈 added field for external link
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      title: '5 Tips for Better Learning at Home',
      author: 'Admin',
      date: 'October 17, 2025',
      image: 'assets/blog1.jpg',
      content: 'Discover how to create a productive home learning environment that boosts your child’s focus and motivation.',
      link: 'https://www.edutopia.org/article/creating-effective-home-learning-environment' // ✅ real article link
    },
    {
      title: 'The Future of Online Education',
      author: 'Rutik Rokade',
      date: 'October 15, 2025',
      image: 'assets/blog2.png',
      content: 'Explore how online platforms are transforming the way we learn and interact in the digital classroom.',
      link: 'https://elearningindustry.com/the-future-of-online-education' // ✅ real link
    },
    {
      title: 'Why Parent Involvement Matters',
      author: 'Team EduSmart',
      date: 'October 10, 2025',
      image: 'assets/blog3.jpg',
      content: 'Learn why parents play a crucial role in a child’s academic growth and emotional development.',
      link: 'https://www.edutopia.org/article/importance-parent-involvement' // ✅ real link
    }
  ];
}
