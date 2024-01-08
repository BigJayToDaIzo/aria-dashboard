import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilOneComponent } from './util-one.component';

describe('UtilOneComponent', () => {
  let component: UtilOneComponent;
  let fixture: ComponentFixture<UtilOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtilOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
