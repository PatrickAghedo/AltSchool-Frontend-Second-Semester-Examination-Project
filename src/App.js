import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './page/Home';
import About from './page/About';
import Users from './page/Users';
import UsersList from './components/UsersList';
import ErrorPage from './page/ErrorPage';
import ErrorHandler from './components/ErrorHandler';
import { ErrorBoundary } from 'react-error-boundary';
import { Profile } from './page/Profile';
import { AuthProvider } from './components/AuthContext';
import { RequireAuth } from './components/RequireAuth';
import { Login } from './page/Login';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://randomuser.me/api/?results=50&seed=abc`);
        if (!res.ok) {
          throw new Error('something went wrong');
        }
        const data = await res.json();

        setData(data.results);
        console.log(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
    return () => {};
  }, []);

  const indexOfLastPost = currentPage * userPerPage;
  const indexOfFirstPost = indexOfLastPost - userPerPage;
  const currentPages = data.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      <AuthProvider>
        <Navbar />
        <ErrorBoundary FallbackComponent={ErrorHandler}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="Users" element={<Users />}>
            <Route
          path="UsersList"
          element={<UsersList data={currentPages} loading={loading} />}
        />
            </Route>
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="login" element={<Login />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ErrorBoundary>
      </AuthProvider>
    </>
  );
}

export default App;
