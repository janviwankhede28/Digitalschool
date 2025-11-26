import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubmitassignmentComponent } from './student-submitassignment.component';

describe('StudentSubmitassignmentComponent', () => {
  let component: StudentSubmitassignmentComponent;
  let fixture: ComponentFixture<StudentSubmitassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentSubmitassignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentSubmitassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
