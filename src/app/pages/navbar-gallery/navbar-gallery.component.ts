import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-navbar-gallery',
  standalone: true,
  imports: [FooterComponent, CommonModule, NavbarComponent],
  templateUrl: './navbar-gallery.component.html',
  styleUrl: './navbar-gallery.component.css'
})
export class NavbarGalleryComponent {

}
