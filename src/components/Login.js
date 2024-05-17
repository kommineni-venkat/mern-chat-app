// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const allowedUsernames = ['jai', 'venkat', 'ram'];
    if (allowedUsernames.includes(username)) {
      const user = { username, password };
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.removeItem('messages'); // Clear previous messages
      navigate('/');
    } else {
      alert('Invalid username');
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
