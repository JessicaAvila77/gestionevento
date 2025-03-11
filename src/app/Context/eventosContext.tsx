import { createContext } from "react";
import { Usuarios} from "../Models/Usuarios"


export const eventosContext = createContext({

    // LOGIN
    //para guardar al usuario auntenticado, sera necesario en todas las paginas.
    usuario: null as Usuarios | null,

    //actualiza el usuario cuando se inicia o cierra sesion.
    setUsuario: (usuario: Usuarios | null) => {},

    //elimina el usuario y limpia datos
    cerrarSesion: () => {},

    //





})