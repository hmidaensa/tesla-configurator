import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTest]',
  standalone: true
})
export class ManageStypeDirective {

  @HostBinding("class.host") classValue:boolean=true;



  constructor() { }



}
