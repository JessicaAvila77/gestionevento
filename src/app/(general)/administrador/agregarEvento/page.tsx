'use client'
import { eventoContext } from '@/Context/eventoContext'
import { Evento } from '@/Modelos/Eventos'
import { useusuariosContext } from '@/Provider/providerUsuarios'
import React, { useState } from 'react'

export default function page() {

  const {Evento,agregarEvento,eliminarEvento} = useusuariosContext()
 
  const[id_eventos,setId_eventos]=useState(0)
  const [nombre,setNombre] =useState('')
  const [fecha_hora,setFecha_hora] =useState('')
  const [ubicacion,setUbicacion] =useState('')

  id_evento INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  fecha_hora DATETIME,
  ubicacion VARCHAR(255),
  estado

  function agregar(){

    let body={
        id_eventos:id_eventos,
        nombre:nombre,
        fecha_hora:fecha_hora,
        ubicacion:ubicacion,
        estado:0,
    }

    agregarEvento(body)
  }

  function editar(item:Evento){

    setId_eventos(item.id_eventos)
    setNombre(item.nombre)
    setFecha_hora(item.fecha_hora)
    setUbicacion(item.ubicacion)
  }

  return (
    <div className='container'>
        <h4>Agregar Evento</h4>

        <div className='row'>
            <div className='col-md-6'>
                <form action="">
                    <input type="text"  className='form-control' value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                    <input type="date"  className='form-control' value={fecha_hora} onChange={(e)=>setFecha_hora(e.target.value)}/>
                    <input type="date"  className='form-control' value={ubicacion} onChange={(e)=>setUbicacion(e.target.value)}/>
                    <button type='button' className='btn btn-success' onClick={agregar}>Agregar Evento</button>
                </form>
            </div>
            <div className='col-md-6'>

                <table className='table'>
                    <thead>
                        <th>Nombre</th>
                        <th>Fecha y Hora</th>
                        <th>Ubicacion</th>
                
                    </thead>
                <tbody>
                    {
                        Evento.map((item)=>(
                            <tr key={item.id_eventos}>
                                <td>{item.nombre}</td>
                                <td>{item.fecha_hora}</td>
                                <td>{item.ubicacion}</td>
                                <td>
                                    <button type='button' className='btn btn-sm btn-info' onClick={()=>editar(item)}> Editar</button>
                                    <button type='button' className='btn btn-sm btn-danger'onClick={()=>eliminarEvento(item.Id)}> Eliminar</button>
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