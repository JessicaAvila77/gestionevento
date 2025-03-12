'use client'
import React, { ReactNode, useContext, useState } from 'react'
import { Usuarios } from '../Models/Usuarios'
import { usuariosContext } from '../Context/usuariosContext';

interface NodeReact{
    children : ReactNode
}

export default function providerUsuarios({children} : NodeReact) {

    const [usuario, setUsuario] = useState<Usuarios | null>(null);

    function cerrarSesion() {
        setUsuario(null);
    }



  return (
    <usuariosContext.Provider value={{
        usuario,
        setUsuario,
        cerrarSesion
    }}> 

        {children}
    </usuariosContext.Provider>
    
  )
}

export function useusuariosContext(){
    return useContext(usuariosContext)
}
