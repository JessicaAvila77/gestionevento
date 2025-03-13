export interface Usuarios {
    id_usuario: number;
    nombre: string;
    email: string;
    rol: 'admin' | 'usuario';
}

export interface Eventos {
    id_evento:number,
    nombre:string,
    fecha_hora:Date,
    ubicacion:string,
    estado :number,
}

export interface Eventos {
    id_tarea:number,
    nombre:string,
    responsable:string,
    estado:number,
    id_evento :number,
}
