import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import { Helmet } from 'react-helmet';

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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>React-router</title>
        <meta
          name="description"
          content="Fake userAuthContext setup using the context API to always carry out a fake authentication"
        />
        <link rel="canonical" href="" />
      </Helmet>
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
    </>
  );
};
