import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <h1>~ Math Magician ~</h1>
    <ul>
      <li>
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li>
        <Link to="/Calculator" className="nav-link">Calculator</Link>
      </li>
      <li>
        <Link to="/Quote" className="nav-link">Quote</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
