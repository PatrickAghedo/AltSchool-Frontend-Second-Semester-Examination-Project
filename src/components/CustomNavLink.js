import * as React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ to, ...props }) => {

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? { color: 'red'} : { textDecoration: 'none' }
      }
      to={to}
      end
      {...props}
    />
  );
};

export default CustomNavLink;
