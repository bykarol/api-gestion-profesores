export interface Profesor {
  id: number
  nombre: string
  apellido: string
  telefono: string
  correo: string
  asignaturas: Array<Asignatura>
}
export interface Asignatura {
  nombre: string
  tipo: string
  curso: string
  grupo: string
  horasSemanales: number
  espacio?: string
}