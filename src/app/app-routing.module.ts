import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnergySystemsComponent } from './energy-systems/energy-system-list/energy-systems.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**', component: EnergySystemsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
