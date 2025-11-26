import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };
showSuccess: any;

  onSubmit() {
    alert(`Thank you for reaching out, ${this.contact.name}! We will get back to you soon.`);

    this.contact = { name: '', email: '', message: '' };
  }
}
