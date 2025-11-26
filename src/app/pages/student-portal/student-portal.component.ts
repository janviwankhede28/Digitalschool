import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-student-portal',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './student-portal.component.html',
  styleUrls: ['./student-portal.component.css']
})
export class StudentPortalComponent implements OnInit {
  private counted = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onScroll() {
    const statsSection = this.el.nativeElement.querySelector('#stats');
    if (statsSection) {
      const rect = statsSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible && !this.counted) {
        this.counted = true;
        this.animateCount();
      }
    }
  }

  animateCount() {
    const counters = this.el.nativeElement.querySelectorAll('.count');
    counters.forEach((counter: HTMLElement) => {
      const target = +counter.getAttribute('data-target')!;
      let count = 0;
      const speed = target / 100; // Adjust speed here

      const updateCount = () => {
        count += speed;
        if (count < target) {
          counter.innerText = Math.ceil(count).toString();
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target.toString() + '+';
        }
      };
      updateCount();
    });
  }
}
