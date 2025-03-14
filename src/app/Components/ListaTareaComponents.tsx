'use client'
import React from 'react'
import { Tarea } from '../Models/Tarea'
import Link from 'next/link'

interface TareaLista{
  tarea: Tarea[]
}

export default function ListaTareasComponents({tarea}:TareaLista) {
return (
  <div>
      <ul>
      {
        tarea.map((tareas:Tarea) => (
          <li key={tareas.id_tarea}>
            <Link href={`/detalle/${tareas.id_tarea}`}>
              {tareas.nombre} - {tareas.responsable} - {tareas.estado} - {tareas.id_evento}

            </Link>
          </li>

        ))
      }
    </ul>
  </div>
)
}

/*id_tarea INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255),
responsable VARCHAR(100),
estado ENUM('pendiente', 'completada') DEFAULT 'pendiente',
id_evento INT,
FOREIGN KEY (id_evento) REFERENCES eventos(id_evento) ON DELETE CASCADE*/
