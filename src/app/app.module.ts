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
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CarruselComponent } from './inicio/cualidades/carrusel/carrusel.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCommonModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
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
    MatCommonModule,
    MatIconModule,
    HttpClientModule,
    CarruselComponent,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
