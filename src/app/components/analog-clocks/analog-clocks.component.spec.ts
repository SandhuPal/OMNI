import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogClocksComponent } from './analog-clocks.component';

describe('AnalogClocksComponent', () => {
  let component: AnalogClocksComponent;
  let fixture: ComponentFixture<AnalogClocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalogClocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalogClocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
