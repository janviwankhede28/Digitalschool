import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"

interface FooterLink {
  label: string
  href: string
}

interface SocialIcon {
  name: string
  icon: string
  url: string
}

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent {
  contactInfo = {
    phone: "+2 123 654 7898",
    address: "25/B Milford Road, New York",
    email: "info@example.com",
  }

  leftLinks: FooterLink[] = [
    { label: "About Us", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "Terms Of Service", href: "#" },
    { label: "Privacy policy", href: "#" },
    { label: "Update News", href: "#" },
  ]

  rightLinks: FooterLink[] = [
    { label: "Campus Safety", href: "#" },
    { label: "Student Activities", href: "#" },
    { label: "Academic Department", href: "#" },
    { label: "Planning & Administration", href: "#" },
    { label: "Office Of The Chancellor", href: "#" },
    { label: "Facility Services", href: "#" },
  ]

  socialIcons: SocialIcon[] = [
    { name: "Facebook", icon: "facebook", url: "#" },
    { name: "LinkedIn", icon: "linkedin", url: "#" },
    { name: "WhatsApp", icon: "whatsapp", url: "#" },
    { name: "YouTube", icon: "youtube", url: "#" },
    { name: "Dribbble", icon: "dribbble", url: "#" },
  ]

  onSubscribe(email: string): void {
    if (email) {
      console.log("Subscribed with email:", email)
      // Add your subscription logic here
    }
  }
}
