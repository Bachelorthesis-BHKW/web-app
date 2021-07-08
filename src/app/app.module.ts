import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { EnergySystemsModule } from './energy-systems/energy-systems.module';

@NgModule({
  declarations: [AppComponent, MessagesComponent],
  imports: [EnergySystemsModule, LoginModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
