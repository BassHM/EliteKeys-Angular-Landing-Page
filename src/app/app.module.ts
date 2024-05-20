import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { CualidadesComponent } from './inicio/cualidades/cualidades.component';
import { ContactoComponent } from './inicio/contacto/contacto.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CarruselComponent } from './inicio/cualidades/carrusel/carrusel.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InicioComponent,
    CualidadesComponent,
    ContactoComponent
    ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    NgbNavModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    CarruselComponent
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
