import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './component/elements/navbar/navbar.component';
import { VehiculoComponent } from './component/vehiculo/vehiculo.component';
import{HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './component/elements/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VehiculoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
