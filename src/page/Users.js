import React from 'react';
import CustomNavLink from '../components/CustomNavLink';
import { Outlet } from 'react-router-dom';
function Users() {
  return (
    <>
      <h2>This page is used to implement nested routes</h2>
      <nav className="nav">
        <CustomNavLink className="nav" to="UsersList">
          UsersList
        </CustomNavLink>
        <Outlet />
      </nav>
    </>
  );
}

export default Users;
