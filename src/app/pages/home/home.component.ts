import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { OurTeacherComponent } from "../our-teacher/our-teacher.component";
import { FooterComponent } from "../footer/footer.component";
import { ChatboatComponent } from "../chatboat/chatboat.component";
import { ProgramsComponent } from "../programs/programs.component";
import { SyllabusComponent } from "../syllabus/syllabus.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ChatboatComponent, ProgramsComponent, SyllabusComponent, TestimonialsComponent, GalleryComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
