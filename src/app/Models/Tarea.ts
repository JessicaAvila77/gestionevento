export interface Tarea {
    id_tarea: number;
    nombre: string;
    responsable: string;
    estado: "pendiente" | "completada";
    id_evento:number;
}
