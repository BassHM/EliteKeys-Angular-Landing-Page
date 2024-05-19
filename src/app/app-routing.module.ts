import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './inicio/contacto/contacto.component';
import { CualidadesComponent } from './inicio/cualidades/cualidades.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'cualidades', component: CualidadesComponent },
  { path: '', redirectTo: '/cualidades', pathMatch: 'full' } // Redirect to cualidades by default
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
