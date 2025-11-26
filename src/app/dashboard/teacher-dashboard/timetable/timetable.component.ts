import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent {

  showModal = false;
  form: FormGroup;

  timetable: any[] = [];

  isEdit = false;
  editIndex: number = -1;

  days = [
    'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dayOfWeek: [''],
      subject: [''],
      teacher: [''],
      startTime: [''],
      endTime: [''],
      meetingLink: ['']
    });
  }

  ngOnInit() {
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    const saved = localStorage.getItem("teacher_timetable");
    this.timetable = saved ? JSON.parse(saved) : [];
  }

  saveToLocalStorage() {
    localStorage.setItem("teacher_timetable", JSON.stringify(this.timetable));
  }

  openModal() {
    this.isEdit = false;
    this.form.reset();
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  // ✅ CREATE
  submit() {
    if (this.form.valid) {
      if (!this.isEdit) {
        // ADD NEW ENTRY
        this.timetable.push(this.form.value);
      } else {
        // ✅ UPDATE EXISTING ENTRY
        this.timetable[this.editIndex] = this.form.value;
      }

      this.saveToLocalStorage();
      this.form.reset();
      this.closeModal();
    }
  }

  // ✅ EDIT
  editRow(i: number) {
    this.isEdit = true;
    this.editIndex = i;

    const data = this.timetable[i];

    this.form.patchValue(data); // ✅ Pre-fill form

    this.showModal = true;
  }

  // ✅ DELETE
  deleteRow(i: number) {
    this.timetable.splice(i, 1);
    this.saveToLocalStorage();
  }
}
