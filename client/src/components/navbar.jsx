import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './navbar.css'

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.post('/api/auth/logout');
    setUser(null);
    navigate('/');
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" id="main">Note Talker</Link>
        <div className="nav-actions">
          {user ? (
            <button id="navbar-logout" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link id="login" to="/login">Login</Link>
              <Link id="register" to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar