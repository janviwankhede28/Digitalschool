import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGalleryComponent } from './navbar-gallery.component';

describe('NavbarGalleryComponent', () => {
  let component: NavbarGalleryComponent;
  let fixture: ComponentFixture<NavbarGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
