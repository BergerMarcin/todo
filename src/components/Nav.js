import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li><NavLink to="/">All</NavLink></li>
      <li><NavLink to="/inprogress">Inprogress</NavLink></li>
      <li><NavLink to="/close">Close</NavLink></li>
    </ul>
  );
}

export default Nav;
