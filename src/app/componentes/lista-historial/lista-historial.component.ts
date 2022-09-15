import { Component, Input } from '@angular/core';
import { RegistroHistorial } from './../../modelos/registro-historial/registro-historial.module';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.scss']
})
export class ListaHistorialComponent{
  @Input() public registro!: Array<RegistroHistorial>;

}
