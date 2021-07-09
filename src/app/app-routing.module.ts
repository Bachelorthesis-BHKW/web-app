import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnergySystemsComponent } from './energy-systems/energy-systems.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardGuard } from './core/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'energy-systems',
    component: EnergySystemsComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}