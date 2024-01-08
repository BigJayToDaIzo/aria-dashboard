import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilThreeComponent } from './util-three.component';

describe('UtilThreeComponent', () => {
  let component: UtilThreeComponent;
  let fixture: ComponentFixture<UtilThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtilThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
