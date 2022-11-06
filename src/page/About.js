import React from 'react';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>React-router</title>
        <meta
          name="description"
          content={
            'React-router implementing Nested routes, 404 page, and Error boundary with fake userAuthContext setup using the context API to always carry out a fake authentication'
          }
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <h2> Frontend Second Semester Examination Project</h2>
      <div className="flex-container">
        <ol className="flex-items">
          <li>
            Setup react-router, implement Nested routes, 404 page, and Error
            boundary.
          </li>
          <li>
            Set up fake userAuthContext using the context API to always carry
            out a fake authentication.
          </li>
          <li>
            Bonus - extract out a custom hook to get the currently logged-in
            user.
          </li>
          <li>
            Implement SEO and Navigation menu that will show on each page.
          </li>
        </ol>
      </div>
    </>
  );
}

export default About;
