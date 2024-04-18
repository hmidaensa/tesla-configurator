import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInfoSelectCarComponent } from './display-info-select-car.component';

describe('DisplayInfoSelectCarComponent', () => {
  let component: DisplayInfoSelectCarComponent;
  let fixture: ComponentFixture<DisplayInfoSelectCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayInfoSelectCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayInfoSelectCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
