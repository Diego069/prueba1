import { Component, Input } from '@angular/core';
import { Alumno } from './../../modelos/alumno/alumno.module'

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent{
  @Input() public alumno!: Array<Alumno>;

}
