import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
  const[user, setUser] = useState([])

  const {id} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:4000/users/${id}`)
    .then(res => {
      console.log('Data received:', res.data);
      setUser(res.data);
    })
    .catch(err => {
      console.error('Error fetching data:', err);
    })
    })

  
  return (
    <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
        <div className='w-25 bg-info-subtle rounded border border-2 border-dark p-4 shadow mt-2'>
            <h2 className='text-center'>User Details</h2>
           <p><strong>Name:</strong> {user.name}</p>
           <p><strong>Username:</strong> {user.username}</p>
           <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>City:</strong> {user.city}</p>
            <div>
                <Link to={`/update/${user.id}`}><button className='btn btn-primary me-2'>Edit</button></Link>
                <Link to='/'><button className='btn btn-warning'>Back</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Read