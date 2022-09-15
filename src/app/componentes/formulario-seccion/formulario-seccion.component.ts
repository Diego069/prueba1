import { Component, Output, EventEmitter} from '@angular/core';
import { Seccion } from './../../modelos/seccion/seccion.module'

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent{
  public seccion: Seccion = {
    id: 0,
    nombre_seccion: ''
  }

  @Output() public enviarSeccion = new EventEmitter<Seccion>();
  public guardarElemento(){
    // copia de un objeto de un nivel
    const copia: Seccion = {
      ...this.seccion
    }

    this.enviarSeccion.emit(copia);

    this.seccion = {
      id: 0,
      nombre_seccion: ''
      }
    }


    public cId(evento: Event): void {
      const ele = evento.target as HTMLInputElement;
      this.seccion.id = Number.parseInt(ele.value) || 0;
    }

    public cNombreSeccion(evento: Event): void {
      const ele = evento.target as HTMLInputElement;
      this.seccion.nombre_seccion = ele.value;
    }

}
