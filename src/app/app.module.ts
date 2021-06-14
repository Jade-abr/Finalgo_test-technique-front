import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { InformationsComponent } from './dashboard/informations/informations.component';
import { ProcessComponent } from './dashboard/process/process.component';
import { ButtonComponent } from './button/button.component';
import { ProgressCercleComponent } from './dashboard/process/progress-cercle/progress-cercle.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    InformationsComponent,
    ProcessComponent,
    ButtonComponent,
    ProgressCercleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
