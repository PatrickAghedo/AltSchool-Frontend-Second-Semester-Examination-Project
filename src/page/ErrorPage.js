import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
    <div className="pagenotfound">
      <h2>404 Error</h2>
      <h2>Page Not Found</h2>
      <h2>
        <Link style={{ color: 'red' }} to="/">
          Go back to Home page
        </Link>
      </h2>
    </div>
    </>
  );
}

export default ErrorPage;
