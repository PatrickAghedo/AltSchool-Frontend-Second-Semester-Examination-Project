import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>React-router</title>
        <meta name="description" content="React-router Home" />
        <link rel="canonical" href="/" />
      </Helmet>
      <h2 className="text">This is My Home Page</h2>
    </>
  );
}

export default Home;
