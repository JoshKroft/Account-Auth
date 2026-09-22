import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

const Home = ({user, error}) => {
  return (
    <div>
      <div>
        {error && <p className="error">{error}</p>}
        {user ? (
          <div>
            <h2>Welcome, {user.name}!</h2>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <h2>Please login or register.</h2>
        )}
      </div>
    </div>
  )
}

export default Home