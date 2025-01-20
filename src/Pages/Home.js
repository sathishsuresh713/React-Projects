import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    const url = 'http://localhost:4000/users'
    axios.get(url)
      .then(res => {
        console.log('Data received:', res.data)
        setData(res.data)
      })
      .catch(err => {
        console.error('Error fetching data:', err)
      })
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/users/${id}`)
      .then(res => {
        console.log('Data deleted:', res.data)
        setData(data.filter(user => user.id !== id))
      })
      .catch(err => {
        console.error('Error deleting data:', err)
      })
  }

  return (
    <div className='my-5 container d-flex flex-column justify-content-center align-items-center min-vh-100'>
      <h1>LIST OF USERS</h1>
      <div className='w-100 bg-info-subtle rounded border border-2 border-dark p-4 shadow mt-2'>
        <Link to='/create' className='btn btn-primary mb-3'>Add User</Link>
        <table className='table table-bordered table-striped table-primary table-hover text-center'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.city}</td>
                  <td>
                    <Link to={`/update/${user.id}`} className='btn btn-warning btn-sm me-2'>Edit</Link>
                    <Link to={`/read/${user.id}`} className='btn btn-info btn-sm me-2'>Read</Link>
                    <button className='btn btn-danger btn-sm me-2' onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home