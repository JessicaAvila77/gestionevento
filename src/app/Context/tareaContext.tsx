import { createContext } from "react";
import { Tarea } from '../Models/Tarea';

export const tareaContext=createContext({
    tarea: [] as Tarea[],
    setTarea: (tarea:Tarea[]) =>{},
    agregarTarea:(tarea: Tarea)=>{},
    actualizarTarea:(id_tarea:number,nombre:string,responsable:string,estado:"pendiente" | "completada",id_evento:number)=>{},
    eliminarTarea:(id_tarea:number)=>{},
})