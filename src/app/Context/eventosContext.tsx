import { createContext } from "react";
import { Usuarios} from "../Models/Usuarios"
import { Eventos } from "../Models/Eventos";
import { Tareas } from "../Models/Tareas";


export const eventosContext = createContext({

    // LOGIN
    //para guardar al usuario 
    usuario: null as Usuarios | null,

    setUsuario: (usuario: Usuarios | null) => {},

    cerrarSesion: () => {},

    //EVENTOS

    eventos: [] as Eventos[],
    setEventos: (eventos: Eventos[]) => {},

    agregarEvento: (evento: Eventos) => {},
    actualizarEvento: (id: number, evento: Eventos) => {},
    eliminarEvento: (id: number) => {},
    restaurarEvento: (id: number) => {},
    cargarEventos: () => {},

    //TAREAS

    tareas: [] as Tareas[],
    setTareas: (tareas: Tareas[]) => {},


    agregarTarea: (tarea: Tareas) => {},
    actualizarTarea: (id: number, tarea: Tareas) => {},
    eliminarTarea: (id: number, eventoId: number) => {},
    cargarTareas: (eventoId: number) => {},

    // Atributos del formulario de tareas
    idTarea: 0,
    setIdTarea: (id: number) => {},
    nombreTarea: "",
    setNombreTarea: (nombre: string) => {},
    responsable: "",
    setResponsable: (responsable: string) => {},
    estadoTarea: "pendiente" as "pendiente" | "completada",
    setEstadoTarea: (estado: "pendiente" | "completada") => {},
    idEvento: 0,
    setIdEvento: (id: number) => {}











})