import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: ""
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://batch13fn-backend.vercel.app/user/users");
      console.log(response.data.users);
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://batch13fn-backend.vercel.app/user/register", formData);

      setFormData({
        name: "",
        age: "",
        email: "",
        password: "",
      });

      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://batch13fn-backend.vercel.app/user/user/${id}`);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />

        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />

        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />

        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <button type="submit">Submit</button>
      </form>

      <h2>Users List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;