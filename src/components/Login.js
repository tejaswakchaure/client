// src/components/Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/users/login`, { username, password });
      setToken(response.data.token); // Assume you store the token in a state or context
      // Redirect to URL form or main page after successful login
    } catch (error) {
      // Adjust the error message based on your backend response for user not found or incorrect password
      setErrorMessage('Login failed. If you do not have an account, please register.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
          <p><Link to="/register">Click here to register</Link></p>
        </div>
      )}
    </div>
  );
}

export default Login;
