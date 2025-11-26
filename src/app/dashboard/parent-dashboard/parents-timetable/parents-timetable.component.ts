import { Component } from '@angular/core';
import { StudentTimetableComponent } from "../../student-dashboard/student-timetable/student-timetable.component";

@Component({
  selector: 'app-parents-timetable',
  standalone: true,
  imports: [StudentTimetableComponent],
  templateUrl: './parents-timetable.component.html',
  styleUrl: './parents-timetable.component.css'
})
export class ParentsTimetableComponent {

   constructor() {}
}
