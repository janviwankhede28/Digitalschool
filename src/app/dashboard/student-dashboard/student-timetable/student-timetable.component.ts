import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-timetable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-timetable.component.html',
  styleUrls: ['./student-timetable.component.css']
})
export class StudentTimetableComponent {
  @Input() showJoinButton: boolean = true;   // <--- added

  timetable: any[] = [];

  constructor() {}

  ngOnInit() {
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    const saved = localStorage.getItem("teacher_timetable");
    this.timetable = saved ? JSON.parse(saved) : [];
  }
}
