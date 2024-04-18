import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectModulColorComponent } from './select-modul-color.component';
import { By } from '@angular/platform-browser';

describe('SelectModulColorComponent', () => {
  let component: SelectModulColorComponent;
  let fixture: ComponentFixture<SelectModulColorComponent>;
   let element;
   let debuger;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectModulColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectModulColorComponent);
    component = fixture.componentInstance;
    
    element = fixture.nativeElement;      // to access DOM element
    debuger = fixture.debugElement;  // test helper

    component.cars=[
      {
        "code": "S",
        "description": "Model S",
        "colors": [
          {
            "code": "white",
            "description": "Pearl White Multi-Coat",
            "price": 0
          },
          {
            "code": "black",
            "description": "Solid Black",
            "price": 0
          },
          {
            "code": "blue",
            "description": "Deep Blue Metallic",
            "price": 0
          },
          {
            "code": "grey",
            "description": "Stealth Grey",
            "price": 0
          },
          {
            "code": "red",
            "description": "Ultra Red",
            "price": 0
          }
        ]
      },
      {
        "code": "X",
        "description": "Model X",
        "colors": [
          {
            "code": "white",
            "description": "Pearl White Multi-Coat",
            "price": 0
          },
          {
            "code": "black",
            "description": "Solid Black",
            "price": 0
          },
          {
            "code": "blue",
            "description": "Deep Blue Metallic",
            "price": 0
          },
          {
            "code": "grey",
            "description": "Stealth Grey",
            "price": 0
          },
          {
            "code": "red",
            "description": "Ultra Red",
            "price": 0
          }
        ]
      },
    
    ]

    fixture.detectChanges();
  });

  it('should tested', () => {
    expect(component).toBeTruthy();
    expect( component.color).toEqual("red");
    expect( component.cars.length).toEqual(2);

    expect(element.querySelector('p').innerText).toEqual('Choose Model');
    expect(debuger.query(By.css('.card-header')).nativeElement.innerText).toEqual('Stepepr 1');

    expect(component.cars.length).toBeLessThanOrEqual(5);
    

    let selectElement = fixture.nativeElement.querySelector('#modelSelect');
    selectElement.selectedIndex = 1;
    selectElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.codeCar).toEqual('X');
   
  });
});
