import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const url = 'http://localhost:8000/api'


const Edit = () => {

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const navigate = useNavigate();
  const {id} = useParams()

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${url}${id}`, {
      title: title,
      subtitle: subtitle
    } )
    navigate('/')
  }

  useEffect( () => {
    const getElementsById = async () => {
      const response = await axios.get(`${url}${id}`)
      setTitle(response.data.title);
      setSubtitle(response.data.subtitle);
    }
    getElementsById();
  }, []) 

  return (
    <div>
              <h3>Edit</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'> Titulo </label>
                <input 
                value={title} 
                onChange={(e)=> setTitle(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Subtitulo </label>
                <input 
                value={subtitle} 
                onChange={(e)=> setSubtitle(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <button type="submit" className='btn btn-success'>Edit</button>
        </form>
    </div>
  )
}

export default Edit;
