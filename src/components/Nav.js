import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <>
      <h1>Links</h1>
      <ul>
        <h5>ToDo:</h5>
        <li><NavLink to="/">All</NavLink></li>
        <li><NavLink to="/todo/start">Start</NavLink></li>
        <li><NavLink to="/todo/inprogress">In Progress</NavLink></li>
        <li><NavLink to="/todo/closed">Closed</NavLink></li>
        <h5>HERE total NEW fresh LINK you asked so many times:</h5>
        <li><NavLink to="/eur">EUR rate</NavLink></li>
      </ul>
      <br/>
    </>
  );
}

export default Nav;
