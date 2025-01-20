import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

export default function Create() {
  const navigate = useNavigate();

  const cityOptions = [
    { value: 'New York', label: 'New York' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Chicago', label: 'Chicago' }
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/users", values)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setValues({ ...values, city: selectedOption.value });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row justify-content-center w-100">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="text-center mb-4">Add a User</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control border border-info border-2"
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  required
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
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
                  required
                  onChange={(e) => setValues({ ...values, username: e.target.value })}
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
                  required
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
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
                  required
                  onChange={(e) => setValues({ ...values, phone: e.target.value })}
                  style={{ boxShadow: "none" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">City:</label>
                <Select
                  className=" border border-info border-2"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  options={cityOptions}
                  placeholder="Select City"
                  styles={{ boxShadow: "none" }}
                />
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}