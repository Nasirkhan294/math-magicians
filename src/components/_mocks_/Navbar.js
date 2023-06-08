import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

const Navbar = [
  { to: '/', text: 'Home' },
  { to: '/calculator', text: 'Calculator' },
  { to: '/quote', text: 'Quote' },
];

const Nav = () => (
  <BrowserRouter>
    <nav className="navbar">
      <h1>~ Math Magician ~</h1>
      <ul>
        {Navbar.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} className="nav-link">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </BrowserRouter>
);

export default Nav;
