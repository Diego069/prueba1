export type seccion = 'CSY4111' | 'CSY4222' | 'CSY4333';

export interface Alumno{
  rut: string,
  nombre: string,
  apellido: string,
  edad: number,
  seccion: seccion,
}
