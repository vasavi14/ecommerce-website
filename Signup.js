// Signup.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignup = () => {
    // Add your signup logic here
    // Example: You can call a signup API or set some state to indicate successful signup
    // For simplicity, let's assume signup is successful, and we redirect to the home page
    onSignup(username);
    history.push('/');
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
