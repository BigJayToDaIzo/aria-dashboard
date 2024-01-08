import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilTwoComponent } from './util-two.component';

describe('UtilTwoComponent', () => {
  let component: UtilTwoComponent;
  let fixture: ComponentFixture<UtilTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtilTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
