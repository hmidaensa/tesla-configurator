import { Directive, HostListener, Renderer2 } from '@angular/core';
import { SharedService } from '../services/shared.service';
 
@Directive({
  selector: '[appManageStepper]',
  standalone: true,

})
export class ManageStepperDirective {
  constructor(
    private sharedService: SharedService,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseover',['$event']) onMouseOver(event:any) {
    
   // console.log(event)

    let step2 = document.querySelector('#step2');
    let step3 = document.querySelector('#step3');

    let isActivateStepper2 = this.sharedService.isActivateStepper2();
    let isActivateStepper3 = this.sharedService.isActivateStepper3();

    if (isActivateStepper2) {
      this.renderer.setStyle(step2, 'pointer-events', '');
    } else {
      this.renderer.setStyle(step2, 'pointer-events', 'none');
    }

    if (isActivateStepper3) {
      this.renderer.setStyle(step3, 'pointer-events', '');
    } else {
      this.renderer.setStyle(step3, 'pointer-events', 'none');
    }
  }
}
