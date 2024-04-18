import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { SharedService } from './shared/services/shared.service';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe,SharedModule,],
  providers:[SharedService],
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'Angular';

}
