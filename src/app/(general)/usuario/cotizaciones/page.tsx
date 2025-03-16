'use client'
import { useEventosContext } from '@/app/Provider/providerEventos';
import React, { useEffect, useState } from 'react'

export default function page() {

  const { usuario, cargarCotizaciones, cotizaciones, solicitarCotizacion } = useEventosContext();
  const [nombreEvento, setNombreEvento] = useState("");
  const [detalles, setDetalles] = useState("");

  useEffect(() => {
    if (usuario) {
      cargarCotizaciones(usuario.id_usuario); 
    }
  }, [usuario]);

  function handleSolicitarCotizacion() {
    if (!usuario) {
      alert("Debe iniciar sesión para solicitar una cotización.");
      return;
    }
    if (!nombreEvento || !detalles) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    solicitarCotizacion({
      id_cotizacion: 0,
      nombre_evento: nombreEvento,
      detalles,
      estado: "pendiente",
      id_usuario: usuario.id_usuario,
    });

    setNombreEvento("");
    setDetalles("");
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Solicitar Cotización</h1>

      {/* Formulario para solicitar cotización */}
      <div className="mb-4 flex flex-col gap-2">
        <input
          type="text"
          placeholder="Nombre del Evento"
          value={nombreEvento}
          onChange={(e) => setNombreEvento(e.target.value)}
          className="border p-2"
        />
        <textarea
          placeholder="Detalles de la cotización"
          value={detalles}
          onChange={(e) => setDetalles(e.target.value)}
          className="border p-2"
        />
        <button onClick={handleSolicitarCotizacion} className="bg-blue-500 text-white p-2 rounded">
          Enviar Cotización
        </button>
      </div>

      {/* Listado de cotizaciones previas */}
      <h2 className="text-xl font-bold mt-6">Mis Cotizaciones</h2>
      <ul>
        {cotizaciones.map((cotizacion) => (
          <li key={cotizacion.id_cotizacion} className="border p-2 flex justify-between items-center">
            <span>
              {cotizacion.nombre_evento} - {cotizacion.detalles} - Estado:{" "}
              <span className={cotizacion.estado === "pendiente" ? "text-yellow-500" : cotizacion.estado === "aprobado" ? "text-green-500" : "text-red-500"}>
                {cotizacion.estado}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
