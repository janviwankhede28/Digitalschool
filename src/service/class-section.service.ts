import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClassSectionService {

  private classUrl = 'http://localhost:8090/api/class';
  private sectionUrl = 'http://localhost:8090/api/section';

  constructor(private http: HttpClient) {}

 private getHeaders() {
  const token = localStorage.getItem('token');
  return {
    headers: new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    })
  };
}

  // CREATE CLASS
  createClass(data: any): Observable<any> {
    return this.http.post(this.classUrl, data, this.getHeaders());
  }

  // CREATE SECTION
  createSection(classId: number, data: any): Observable<any> {
    return this.http.post(
      `${this.sectionUrl}/classes/${classId}/sections`,
      data,
      this.getHeaders()
    );
  }

  // UPDATE SECTION
  updateSection(sectionId: number, data: any): Observable<any> {
    return this.http.put(
      `${this.sectionUrl}/sections/${sectionId}`,
      data,
      this.getHeaders()
    );
  }

  // DELETE SECTION
  deleteSection(sectionId: number): Observable<any> {
    return this.http.delete(
      `${this.sectionUrl}/sections/${sectionId}`,
      this.getHeaders()
    );
  }
}
