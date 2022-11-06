import React from 'react';
import { Helmet } from 'react-helmet';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/');
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
        <h2 className="text">Welcome {auth.user}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};
