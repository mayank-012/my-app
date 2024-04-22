// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ( ) => {
  return (
    <div>
      <h1>Welcome to My Website!</h1>
      <p>This is the home page.</p>
      
        
      
      <nav>
        <ul>
            <li><Link to="/report"><button>Report Water Wastage</button></Link></li>
          <li><Link to="/login"><button>Login</button></Link></li>
          <li><Link to="/signup"><button>Sign Up</button></Link></li>
          <li><Link to="/reports"><button>Check Recent Reports</button></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
