import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamPlannerComponent } from './exam-planner.component';

describe('ExamPlannerComponent', () => {
  let component: ExamPlannerComponent;
  let fixture: ComponentFixture<ExamPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamPlannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
