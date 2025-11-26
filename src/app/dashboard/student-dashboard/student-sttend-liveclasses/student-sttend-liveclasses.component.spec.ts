import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSttendLiveclassesComponent } from './student-sttend-liveclasses.component';

describe('StudentSttendLiveclassesComponent', () => {
  let component: StudentSttendLiveclassesComponent;
  let fixture: ComponentFixture<StudentSttendLiveclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentSttendLiveclassesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentSttendLiveclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
