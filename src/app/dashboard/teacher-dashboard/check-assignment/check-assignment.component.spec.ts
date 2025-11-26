import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAssignmentComponent } from './check-assignment.component';

describe('CheckAssignmentComponent', () => {
  let component: CheckAssignmentComponent;
  let fixture: ComponentFixture<CheckAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
