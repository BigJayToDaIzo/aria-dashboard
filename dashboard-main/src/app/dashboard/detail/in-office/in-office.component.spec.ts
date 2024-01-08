import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOfficeComponent } from './in-office.component';

describe('InOfficeComponent', () => {
  let component: InOfficeComponent;
  let fixture: ComponentFixture<InOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InOfficeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
