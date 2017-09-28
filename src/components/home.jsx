import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="app">
      <div>
        <strong>Home</strong> | <Link to="about">About</Link> | <Link to="cars">Cars</Link>
      </div>
      <div>
        This is a great home.
      </div>
    </div>
  );
};

export default Home;
