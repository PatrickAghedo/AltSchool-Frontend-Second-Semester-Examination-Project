import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function ErrorPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>React-router</title>
        <meta name="description" content="404 page" />
        <link rel="canonical" href="" />
      </Helmet>
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
