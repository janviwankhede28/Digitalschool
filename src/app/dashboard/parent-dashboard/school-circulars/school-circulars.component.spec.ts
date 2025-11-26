import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolCircularsComponent } from './school-circulars.component';

describe('SchoolCircularsComponent', () => {
  let component: SchoolCircularsComponent;
  let fixture: ComponentFixture<SchoolCircularsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolCircularsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolCircularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
