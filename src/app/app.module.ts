import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './components/app/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { PortafoliosComponent } from './components/portafolios/portafolios.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactanosComponent,
    PortafoliosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
