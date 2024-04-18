import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SharedService } from '../../shared/services/shared.service';
 
@Component({
  selector: 'app-display-info-select-car',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './display-info-select-car.component.html',
  styleUrl: './display-info-select-car.component.scss',
})
export class DisplayInfoSelectCarComponent {
  infoOptionCosts = this.sharedService.optionConfig();
  constructor(private sharedService: SharedService) {}


   
}
