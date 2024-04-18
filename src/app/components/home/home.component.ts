import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  form:FormGroup;

  constructor(private buildForm:FormBuilder){


    this.form=this.buildForm.group({
      firstName : new FormControl('' ,[Validators.required])
  })
  }

}
