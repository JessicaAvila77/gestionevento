'use client'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Tarea } from '../Models/Tarea'
import {tareaContext} from '../Context/tareaContext'


interface VistaReact{
    children:ReactNode
}
export default function tareaProvider({children}:VistaReact) {

  const [tarea,setTarea] =useState<Tarea[]>([]);

  useEffect(()=>{

    let Newtarea: Tarea[]=[
        {id_tarea:1, nombre:'Comprar materiales', responsable:'Juan', estado:'completada', id_evento: 100},
        {id_tarea:2, nombre:'Hacer inventario de materiales', responsable:'Ana', estado:'pendiente', id_evento: 101},
    ]

    setTarea(Newtarea)

  },[])

  function agregarTarea(tarea:Tarea){

  }

  function actualizarTarea (id_tarea:number,nombre:string,responsable:string,estado:"pendiente" | "completada",id_evento:number){

  }

  function eliminarTarea(id_tarea:number){

  }


  return (
    <tareaContext.Provider value={{tarea,setTarea,agregarTarea,actualizarTarea,eliminarTarea}}>
        {children}
    </tareaContext.Provider>
  )
}

export function useUsuaarioContext(){
        return useContext(tareaContext)
}
