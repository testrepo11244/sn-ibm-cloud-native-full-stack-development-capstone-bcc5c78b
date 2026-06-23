import React, { useState } from 'react';
import './Register.css'; // Optional styling file

/**
 * Repository: xrwvm-fullstack_developer_capstone
 * Component: Register
 *
 * This component renders the sign‑up form for the Car Dealership application.
 * It includes five input fields with appropriate placeholder text and a
 * Register button that triggers a POST request to the Django backend.
 */

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Registration successful! You can now log in.');
        // Optionally redirect to login page
        window.location.href = '/login';
      } else {
        const data = await response.json();
        alert(`Registration failed: ${data.detail || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An unexpected error occurred.');
    }
  };

  return (
    <div className="register-container container mt-5">
      <h2 className="mb-4 text-center">Create Your Account</h2>
      <form onSubmit={handleSubmit} className="register-form">

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Enter a unique username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            placeholder="Your first name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            placeholder="Your last name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Create a strong password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block mt-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;