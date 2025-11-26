import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAccessbookComponent } from './student-accessbook.component';

describe('StudentAccessbookComponent', () => {
  let component: StudentAccessbookComponent;
  let fixture: ComponentFixture<StudentAccessbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentAccessbookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentAccessbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
