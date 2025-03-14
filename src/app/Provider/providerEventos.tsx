'use client'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Usuarios } from '../Models/Usuarios'
import { eventosContext } from '../Context/eventosContext';
import { Eventos } from '../Models/Eventos';
import { Tareas } from '../Models/Tareas';

interface NodeReact{
    children : ReactNode
}

export default function providerEventos({children} : NodeReact) {

    const [usuario, setUsuario] = useState<Usuarios | null>(null);
    const [eventos, setEventos] = useState<Eventos[]>([]);

    const [tareas, setTareas] = useState<Tareas[]>([]);
    

    const [idTarea, setIdTarea] = useState(0);
    const [nombreTarea, setNombreTarea] = useState("");
    const [responsable, setResponsable] = useState("");
    const [estadoTarea, setEstadoTarea] = useState<"pendiente" | "completada">("pendiente");
    const [idEvento, setIdEvento] = useState(0);



    useEffect(() => {
        cargarEventos();
        //cargarTareas();
    }, []);

    //CRUD EVENTOS
    async function cargarEventos() {
        try {
            const res = await fetch("http://localhost:5000/eventos");
            const data = await res.json();
            setEventos(data);
        } catch (err) {
            console.error("Error al obtener eventos:", err);
        }
    }

    async function agregarEvento(nuevoEvento: Eventos) {
        try {
            await fetch("http://localhost:5000/eventos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevoEvento),
            });
            cargarEventos();
        } catch (err) {
            console.error("Error al agregar evento:", err);
        }
    }

    async function actualizarEvento(id: number, eventoActualizado: Eventos) {
        try {
            await fetch(`http://localhost:5000/eventos/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(eventoActualizado),
            });
            cargarEventos();
        } catch (err) {
            console.error("Error al actualizar evento:", err);
        }
    }

    async function eliminarEvento(id: number) {
        try {
            console.log("Inactivando evento con ID:", id);
    
            const res = await fetch(`http://localhost:5000/eventos/eliminar/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" }
            });
    
            if (!res.ok) {
                const errorData = await res.json();
                console.error("Error al inactivar evento:", errorData.mensaje);
                return;
            }
    
            cargarEventos(); 
            
        } catch (err) {
            console.error("Error al inactivar evento:", err);
        }
    }

    //no se ha implementado
    async function restaurarEvento(id: number) {
        try {
            await fetch(`http://localhost:5000/eventos/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ estado: "activo" }),
            });
            cargarEventos();
        } catch (err) {
            console.error("Error al restaurar evento:", err);
        }
    }

    function cerrarSesion() {
        setUsuario(null);
    }

    //CRUD TAREAS

    async function cargarTareas(eventoId: number) {
        try {
            const res = await fetch(`http://localhost:5000/tareas/${eventoId}`);
            const data = await res.json();
            setTareas(data);
        } catch (err) {
            console.error("Error al obtener tareas:", err);
        }
    }

    async function agregarTarea(nuevaTarea: Tareas) {
        try {
            await fetch("http://localhost:5000/tareas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevaTarea)
            });

            cargarTareas(nuevaTarea.id_evento);
        } catch (err) {
            console.error("Error al agregar tarea:", err);
        }
    }

    async function actualizarTarea(id: number, tareaActualizada: Tareas) {
        try {
            await fetch(`http://localhost:5000/tareas/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(tareaActualizada)
            });

            cargarTareas(tareaActualizada.id_evento);
        } catch (err) {
            console.error("Error al actualizar tarea:", err);
        }
    }

    async function eliminarTarea(id: number, eventoId: number) {
        try {
            await fetch(`http://localhost:5000/tareas/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            });

            cargarTareas(eventoId);
        } catch (err) {
            console.error("Error al eliminar tarea:", err);
        }
    }




  return (
    <eventosContext.Provider value={{
        usuario,
        setUsuario,
        cerrarSesion,
        eventos,
        setEventos,
        agregarEvento,
        actualizarEvento,
        eliminarEvento,
        restaurarEvento,
        cargarEventos,
        tareas,
                setTareas,
                agregarTarea,
                actualizarTarea,
                eliminarTarea,
                cargarTareas,
                idTarea, setIdTarea,
                nombreTarea, setNombreTarea,
                responsable, setResponsable,
                estadoTarea, setEstadoTarea,
                idEvento, setIdEvento
    }}> 

        {children}
    </eventosContext.Provider>
    
  )
}

export function useEventosContext(){
    return useContext(eventosContext)
}
