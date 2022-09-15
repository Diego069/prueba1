import { Component, Output, EventEmitter } from '@angular/core';
import { Alumno, seccion } from'./../../modelos/alumno/alumno.module'

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent{
  public s: Array<string> = [
    'CSY4111',
    'CSY4222',
    'CSY4333',
    'CSY4555',
  ]
  public alumno: Alumno = {
    rut: '',
    nombre: '',
    apellido: '',
    edad: 0,
    seccion: 'CSY4111'
  }

  @Output() public enviarAlumno = new EventEmitter<Alumno>();
public guardarElemento(){
  // copia de un objeto de un nivel
  const copia: Alumno = {
    ...this.alumno
  }

  this.enviarAlumno.emit(copia);

  this.alumno = {
    rut: '',
    nombre: '',
    apellido: '',
    edad: 0,
    seccion: 'CSY4111'
    }
  }


  public cRut(evento: Event): void {
    const ele = evento.target as HTMLInputElement;
    this.alumno.rut = ele.value;
  }

  public cNombre(evento: Event): void {
    const ele = evento.target as HTMLInputElement;
    this.alumno.nombre = ele.value;
  }

  public cApellido(evento: Event): void {
    const ele = evento.target as HTMLInputElement;
    this.alumno.apellido = ele.value;
  }

  public cEdad(evento: Event): void {
    const ele = evento.target as HTMLInputElement;
    this.alumno.edad = Number.parseInt(ele.value) || 0;
  }

  public cSeccion(evento: Event): void {
    const ele = evento.target as HTMLInputElement;
    this.alumno.seccion = ele.value as seccion;
  }
}








