import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
  const [values, setValues] = useState({
    name: "", username: "", email: "", phone: "", city: ""
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/users/${id}`)
      .then(res => {
        console.log('Data received:', res.data);
        setValues(res.data);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/users/${id}`, values)
      .then(res => {
        console.log('Data updated:', res.data);
        navigate("/");
      })
      .catch(err => {
        console.error('Error updating data:', err);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row justify-content-center w-100">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="text-center mb-4">Update User</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control border border-info border-2"
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                  required
                  style={{ boxShadow: "none" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username:</label>
                <input
                  type="text"
                  className="form-control border border-info border-2"
                  id="username"
                  name="username"
                  placeholder="Enter Username"
                  value={values.username}
                  onChange={(e) => setValues({ ...values, username: e.target.value })}
                  required
                  style={{ boxShadow: "none" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control border border-info border-2"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  required
                  style={{ boxShadow: "none" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone:</label>
                <input
                  type="text"
                  className="form-control border border-info border-2"
                  id="phone"
                  name="phone"
                  placeholder="Enter Phone"
                  value={values.phone}
                  onChange={(e) => setValues({ ...values, phone: e.target.value })}
                  required
                  style={{ boxShadow: "none" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">City:</label>
                <input
                  type="text"
                  className="form-control border border-info border-2"
                  id="city"
                  name="city"
                  placeholder="Enter City"
                  value={values.city}
                  onChange={(e) => setValues({ ...values, city: e.target.value })}
                  required
                  style={{ boxShadow: "none" }}
                />
              </div>
              <button type="submit" className="btn btn-success">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;