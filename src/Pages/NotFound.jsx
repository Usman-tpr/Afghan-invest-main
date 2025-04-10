// src/components/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">Page Not Found</h2>
        <p className="mt-2 text-gray-500">
          Oops! It seems the page you're looking for doesn't exist.
        </p>
        <Link to="/" className="mt-6 inline-block px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded">
          Go Back to Home
        </Link>
        {/* <div className="mt-8">
          <img
            src="https://via.placeholder.com/300x200" // Replace with your museum's image or illustration
            alt="Museum Illustration"
            className="mx-auto rounded shadow-lg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default NotFound;
