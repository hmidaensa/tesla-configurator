import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SelectModulColorComponent } from './components/select-modul-color/select-modul-color.component';
import { SelectConfigCarComponent } from './components/select-config-car/select-config-car.component';
import { DisplayInfoSelectCarComponent } from './components/display-info-select-car/display-info-select-car.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,

    children: [
      {
        path: '',
        redirectTo: 'step1',
        pathMatch: 'full',
      },
      {
        path: 'step1',
        component: SelectModulColorComponent,
        //loadComponent:() => import('./components/select-modul-color/select-modul-color.component').then( x =>x.SelectModulColorComponent);
      },
      {
        path: 'step2',
        component: SelectConfigCarComponent
      },
      {
        path: 'step3',
        component: DisplayInfoSelectCarComponent
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
