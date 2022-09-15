import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { FormularioSeccionComponent } from './componentes/formulario-seccion/formulario-seccion.component';
import { ListaHistorialComponent } from './componentes/lista-historial/lista-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioAlumnoComponent,
    AlumnoComponent,
    ListaAlumnosComponent,
    HistorialComponent,
    FormularioSeccionComponent,
    ListaHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
