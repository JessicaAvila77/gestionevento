'use client'
import { tareaContext } from '@/Context/tareaContext';
import { Tarea } from '@/Models/Tarea';
import { usetareasContext } from '@/Provider/tareaProvider';
import React, { useState } from 'react'

export default function page() {

    const { Tareas, agregarTarea, eliminarTarea } = usetareasContext()

    const [id_tarea, setId_tarea] = useState(0)
    const [nombre, setNombre] = useState('')
    const [responsable, setResponsable] = useState('')
    const [estado, setEstado] = useState('pendiente')
    const [id_evento, setId_evento] = useState(0)

    function agregar() {
        let body = {
            id_tarea: id_tarea,
            nombre: nombre,
            responsable: responsable,
            estado: estado,
            id_evento: id_evento
        }

        agregarTarea(body)
    }

    function editar(item: Tarea) {
        setId_tarea(item.id_tarea)
        setNombre(item.nombre)
        setResponsable(item.responsable)
        setEstado(item.estado)
        setId_evento(item.id_evento)
    }

    return (
        <div className='container'>
            <h4>Agregar Tarea</h4>

            <div className='row'>
                <div className='col-md-6'>
                    <form action="">
                        <input type="text" className='form-control' placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        <input type="text" className='form-control' placeholder='Responsable' value={responsable} onChange={(e) => setResponsable(e.target.value)} />
                        <select className='form-control' value={estado} onChange={(e) => setEstado(e.target.value)}>
                            <option value="pendiente">Pendiente</option>
                            <option value="completada">Completada</option>
                        </select>
                        <input type="number" className='form-control' placeholder='ID Evento' value={id_evento} onChange={(e) => setId_evento(Number(e.target.value))} />
                        <button type='button' className='btn btn-success' onClick={agregar}>Agregar Tarea</button>
                    </form>
                </div>
                <div className='col-md-6'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Responsable</th>
                                <th>Estado</th>
                                <th>ID Evento</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Tareas.map((item) => (
                                    <tr key={item.id_tarea}>
                                        <td>{item.nombre}</td>
                                        <td>{item.responsable}</td>
                                        <td>{item.estado}</td>
                                        <td>{item.id_evento}</td>
                                        <td>
                                            <button type='button' className='btn btn-sm btn-info' onClick={() => editar(item)}> Editar</button>
                                            <button type='button' className='btn btn-sm btn-danger' onClick={() => eliminarTarea(item.id_tarea)}> Eliminar</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
