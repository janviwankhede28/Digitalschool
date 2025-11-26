import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-scholarship',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './scholarship.component.html',
  styleUrl: './scholarship.component.css'
})
export class ScholarshipComponent {
  searchText = '';
  // sample scholarships
  scholarships = [
    {
      id: 1,
      title: 'Rural Merit Scholarship',
      desc: 'Merit-based scholarship for village students (Class 9-12).',
      amount: '₹10,000',
      deadline: '2025-12-15',
      img: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=4c6db2d8a6ecf8b9f9a5f6e0b1a6f9b9'
    },
    {
      id: 2,
      title: 'Girls Education Grant',
      desc: 'Support for girls completing Class 10 with >75% marks.',
      amount: '₹15,000',
      deadline: '2025-11-30',
      img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0f4c2a3bdf7b1f0e2a8ed3c4a9b1e2c5'
    },
    {
      id: 3,
      title: 'STEM Prodigy Award',
      desc: 'Scholarship for science projects and innovation (age 14-18).',
      amount: '₹25,000',
      deadline: '2026-01-10',
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2f3c4b5a6a7c8d9e0f1a2b3c4d5e6f7a'
    }
  ];

  // reactive form for applying
  applyForm = this.fb.group({
    scholarshipId: [0 as number | null, Validators.required],
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    note: ['']
  });

  appliedSuccess: string | null = null;

  constructor(private fb: FormBuilder) {}

  filtered() {
    const q = this.searchText.trim().toLowerCase();
    if (!q) return this.scholarships;
    return this.scholarships.filter(s =>
      (s.title + ' ' + s.desc + ' ' + s.amount).toLowerCase().includes(q)
    );
  }

  openApply(scholarshipId: number) {
    this.applyForm.patchValue({ scholarshipId });
    // scroll to form
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
  }

  submitApplication() {
    if (this.applyForm.invalid) {
      this.applyForm.markAllAsTouched();
      return;
    }

    // simulate submit
    const data = this.applyForm.value;
    console.log('Applying with:', data);

    // show success message
    const schol = this.scholarships.find(s => s.id === data.scholarshipId);
    this.appliedSuccess = `Application received for "${schol?.title}". We'll contact you at ${data.email}.`;

    // reset after short time (simulate)
    setTimeout(() => {
      this.applyForm.reset();
      this.appliedSuccess = null;
    }, 8000);
  }
}