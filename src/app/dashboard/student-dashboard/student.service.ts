import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from './models/assignment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

   private apiUrl = 'http://localhost:3000/assignments'; // Replace with your backend

  constructor(private http: HttpClient) {}

  submitAssignment(assignment: Assignment, file?: File): Observable<Assignment> {
    const formData = new FormData();
    formData.append('title', assignment.title);
    formData.append('description', assignment.description);
    formData.append('studentId', assignment.studentId.toString());
    if (file) {
      formData.append('file', file);
    }

    return this.http.post<Assignment>(this.apiUrl, formData);
  }

  getAssignmentsByStudent(studentId: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.apiUrl}?studentId=${studentId}`);
  }
}

