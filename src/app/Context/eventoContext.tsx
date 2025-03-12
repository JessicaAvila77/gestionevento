import { createContext } from "react";
import {Evento} from '../modelos/Evento'

export const eventoContext=createContext({
    evento: [] as Evento[],
    listarEventos:()=>{},
    agregarEvento:(evento: Evento)=>{},
    actualizarEvento:(evento: Evento)=>{},
    eliminarEvento:(id:number)=>{},
})