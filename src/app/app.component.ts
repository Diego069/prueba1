import { Component } from '@angular/core';
import { Alumno } from './modelos/alumno/alumno.module'
import { RegistroHistorial } from './modelos/registro-historial/registro-historial.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listaAlumno: Array<Alumno> = [
    {
      rut: '12345678-1',
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 22,
      seccion: 'CSY4111',
    },
    {
      rut: '98234141-2',
      nombre: 'GOKUSSJ',
      apellido: 'si',
      edad: 999999,
      seccion: 'CSY4111',
    },
    {
      rut: '98234141-2',
      nombre: 'Diego',
      apellido: 'si',
      edad: 20,
      seccion: 'CSY4111',
    },
  ]



  public escucharAlumno(nuevoA: Alumno): void {
    this.listaAlumno.push(nuevoA);
  }
}
