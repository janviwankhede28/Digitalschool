import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsTimetableComponent } from './parents-timetable.component';

describe('ParentsTimetableComponent', () => {
  let component: ParentsTimetableComponent;
  let fixture: ComponentFixture<ParentsTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentsTimetableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentsTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
