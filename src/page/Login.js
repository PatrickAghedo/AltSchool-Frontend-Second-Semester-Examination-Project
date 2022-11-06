import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

export const Login = () => {
  const [user, setUser] = useState('');

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || '/profile';

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <label>
        Username:{' '}
        <input
          placeholder="Username"
          type="text"
          onChange={(e) => setUser(e.target.value)}
        />
      </label>

      <button onClick={handleLogin}> Login </button>
    </div>
  );
};