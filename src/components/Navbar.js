import React from 'react';
import CustomNavLink from '../components/CustomNavLink';
import { useAuth } from './AuthContext';

function Navbar() {
  const auth = useAuth();
  return (
    <>
      <nav>
        <h1 className="header">
          Welcome to my AltSchool Frontend Second Semester Examination Project
        </h1>
        <CustomNavLink className="nav" to="/">
          Home &nbsp;
        </CustomNavLink>
        &nbsp;
        <CustomNavLink className="nav" to="/about">
          &nbsp; About &nbsp;
        </CustomNavLink>
        &nbsp;
        <CustomNavLink className="nav" to="/users">
          &nbsp; Users &nbsp;
        </CustomNavLink>
        &nbsp;
        <CustomNavLink className="nav" to="/profile">
          &nbsp; Profile
        </CustomNavLink>
        {!auth.user && (
          <CustomNavLink className="nav" to="/login">
            &nbsp; Login
          </CustomNavLink>
        )}
      </nav>
    </>
  );
}

export default Navbar;
