
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css'

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    
    const takenUsernames = JSON.parse(localStorage.getItem('users')) || [];
    const restrictedUsernames = ['jai', 'venkat', 'ram'];

    if (restrictedUsernames.includes(username)) {
      alert('Username is restricted');
    } else if (takenUsernames.find(user => user.username === username)) {
      alert('Username is already taken');
    } else {
     
      const user = { username, password };
      localStorage.setItem('users', JSON.stringify([...takenUsernames, user]));
      navigate('/login');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
