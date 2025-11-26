import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeRemindersComponent } from './fee-reminders.component';

describe('FeeRemindersComponent', () => {
  let component: FeeRemindersComponent;
  let fixture: ComponentFixture<FeeRemindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeeRemindersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeeRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
