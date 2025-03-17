'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useEventosContext } from '../Provider/providerEventos';
import Link from 'next/link';

export default function NavBarUsuario() {
  
  const { usuario, cerrarSesion } = useEventosContext();
  const router = useRouter();

  function Logout() {
    cerrarSesion();
    router.push("/");
  }

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
            <div className="flex gap-4">
                <Link href="/usuario/eventosActivos" className="hover:text-gray-300">Eventos activos</Link>
                <Link href="/usuario/cotizaciones" className="hover:text-gray-300">Mis Cotizaciones</Link>
                
            </div>
            <div className="flex gap-4 items-center">
                <span>{usuario?.nombre}</span>
                <button onClick={Logout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
                    Cerrar Sesión
                </button>
            </div>
        </nav>
  );
}
