import React from 'react';
import CustomNavLink from '../components/CustomNavLink';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Users() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>React-router</title>
        <meta
          name="description"
          content="React-router implementing Nested routes"
        />
        <link rel="canonical" href="" />
      </Helmet>
      <h2>This page is used to implement nested routes</h2>
      <nav className="nav">
        <CustomNavLink className="nav" to="usersList">
          UsersList
        </CustomNavLink>
        <Outlet />
      </nav>
    </>
  );
}

export default Users;
