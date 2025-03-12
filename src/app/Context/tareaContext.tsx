import { createContext } from "react";
import {Tarea} from '../Models/Tarea'

export const eventoContext=createContext({
    tarea: [] as Tarea[],
    listarTareas:()=>{},
    agregarTareas:(tarea: Tarea)=>{},
    actualizarTareas:(tarea: Tarea)=>{},
    eliminarTareas:(id_tarea:number)=>{},
})