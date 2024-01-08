import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNavBarComponent } from './detail-nav-bar.component';

describe('DetailNavBarComponent', () => {
  let component: DetailNavBarComponent;
  let fixture: ComponentFixture<DetailNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
