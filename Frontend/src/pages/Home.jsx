import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Blends</h1>
      <p>Order food from your favorite restaurants!</p>
      <Link to="/restaurants">
        <button>Explore Menu</button>
      </Link>
    </div>
  );
};

export default Home;