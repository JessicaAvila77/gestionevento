'use client'
import { useEventosContext } from '@/app/Provider/providerEventos';
import React from 'react'

export default function Usuarios() {

  const { usuario } = useEventosContext();

  return (
    <div>
      
     <h1>Bienvenido, {usuario?.nombre }</h1>
      
    </div>
  )
}
