import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = 'http://localhost:8000/api'

const Show = () => {

    const [elementos, setElementos] = useState([]);

    useEffect( () => {
        getAllElements();
    }, [])

    const getAllElements = async () => {
        const response = await axios.get(`${url}/proyectos`);
        setElementos(response.data);
    }

    const deleteElement = async (id) => {
        await axios.delete(`${url}/proyectos/${id}`);
        getAllElements();
    }

  return (
    <div>
        <Link to="/create" className='btn btn-success btn-lg '> Create </Link>

        <table>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Subtitulo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    elementos.map( (elemento) => (
                        <tr key={elemento.id}>
                            <td>{elemento.title}</td>
                            <td>{elemento.subtitle}</td>
                            <td>
                                <Link to={`/edit/${elemento.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteElement(elemento.id)} className="btn btn-danger">Eliminar</button>
                            </td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Show;