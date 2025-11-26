import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Book {
  title: string;
  author: string;
  image: string;
  fileUrl: string;
}

@Component({
  selector: 'app-student-accessbook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-accessbook.component.html',
  styleUrl: './student-accessbook.component.css'
})
export class StudentAccessbookComponent {

books: Book[] = [
    {
      title: 'Mathematics for Beginners',
      author: 'John Parker',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=60',
      fileUrl: 'assets/books/maths.pdf'
    },
    {
      title: 'Physics Simplified',
      author: 'Dr. Emily Clark',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=60',
      fileUrl: 'assets/books/physics.pdf'
    },
    {
      title: 'Chemistry Concepts',
      author: 'Sarah Lee',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=60',
      fileUrl: 'assets/books/chemistry.pdf'
    },
    {
      title: 'English Grammar Guide',
      author: 'Laura Brown',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=60',
      fileUrl: 'assets/books/english.pdf'
    },
    {
      title: 'Computer Science Basics',
      author: 'Alex Martin',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=60',
      fileUrl: 'assets/books/computer.pdf'
    },
    {
      title: 'Biology Insights',
      author: 'Dr. Olivia Taylor',
      image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=60',
      fileUrl: 'assets/books/biology.pdf'
    }
  ];

  // open PDF in a new tab
  readBook(book: Book) {
    window.open(book.fileUrl, '_blank');
  }

  // trigger download
  downloadBook(book: Book) {
    const link = document.createElement('a');
    link.href = book.fileUrl;
    link.download = book.title + '.pdf';
    link.click();
  }
}
