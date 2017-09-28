import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="app">
      <div>
        <Link to="home">Home</Link> | <strong>About</strong> | <Link to="cars">Cars</Link>
      </div>
      <div>
        This is a React Router + Redux boilerplate from Le Wagon.
      </div>
    </div>
  );
};

export default About;
