'use client'
import React, { ReactNode, useContext, useState } from 'react'
import { Usuarios } from '../Models/Usuarios'
import { eventosContext } from '../Context/eventosContext';

interface NodeReact{
    children : ReactNode
}

export default function providerEventos({children} : NodeReact) {

    const [usuario, setUsuario] = useState<Usuarios | null>(null);

    function cerrarSesion() {
        setUsuario(null);
    }



  return (
    <eventosContext.Provider value={{
        usuario,
        setUsuario,
        cerrarSesion
    }}> 

        {children}
    </eventosContext.Provider>
    
  )
}

export function useEventosContext(){
    return useContext(eventosContext)
}
