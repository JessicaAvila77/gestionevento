"use client";

import { useEventosContext } from "@/app/Provider/providerEventos";
import React, { useEffect } from "react";

export default function page() {
  const { usuario, cerrarSesion, eventos, confirmarAsistencia, cargarEventos } = useEventosContext();

  console.log("🔍 Usuario en eventosActivos:", usuario);

  useEffect(() => {
    cargarEventos();
  }, []);

  function ConfirmarAsistencia(id_evento: number) {
    
    if (!usuario) {
      alert("Debe iniciar sesión para confirmar asistencia.");
      return;
    }

    console.log(`Usuario ${usuario.nombre} (${usuario.id_usuario}) confirmando asistencia al evento ${id_evento}`);

    confirmarAsistencia(id_evento);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Bienvenido, {usuario?.nombre || "Usuario"}
      </h1>
      <p className="mb-4">Confirma tu asistencia a los eventos disponibles.</p>

      {usuario ? (
        <>
          <h2 className="text-xl font-bold mt-6">Eventos Activos</h2>
          <ul>
            {eventos.map((evento) => (
              <li
                key={evento.id_evento}
                className="border p-2 flex justify-between items-center"
              >
                <span>
                  {evento.nombre} -{" "}
                  {new Date(evento.fecha_hora).toLocaleString()}
                </span>
                <button
                  onClick={() => ConfirmarAsistencia(evento.id_evento)}
                  className="bg-green-500 text-white p-1 rounded hover:bg-green-600 transition"
                >
                  Confirmar Asistencia
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-red-500 font-semibold">
          Debe iniciar sesión para ver eventos y confirmar asistencia.
        </p>
      )}
    </div>
  );
}
