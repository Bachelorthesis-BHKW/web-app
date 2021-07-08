import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnergySystemsComponent } from './energy-systems/energy-systems.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'energy-systems', component: EnergySystemsComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
