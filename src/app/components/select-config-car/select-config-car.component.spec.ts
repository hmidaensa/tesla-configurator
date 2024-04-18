import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectConfigCarComponent } from './select-config-car.component';

describe('SelectConfigCarComponent', () => {
  let component: SelectConfigCarComponent;
  let fixture: ComponentFixture<SelectConfigCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectConfigCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectConfigCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
