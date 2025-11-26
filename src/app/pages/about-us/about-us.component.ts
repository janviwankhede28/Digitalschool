import { Component, AfterViewInit } from '@angular/core';
import AOS from 'aos';

import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: false
    });
  }

}
