import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import useAuthStore from './store/authStore';

import Login from './pages/Login';
import Products from './pages/Products';
import Users from './pages/Users';
import Carts from './pages/Orders';
import Dashboard from './pages/Dashboard'; 

const App = () => {
  const { isAuthenticated, logout } = useAuthStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      logout();
    }, 3600000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        {isAuthenticated && (
          <button
            onClick={logout}
            style={{ position: 'absolute', top: 10, right: 10 }}
          >
            Logout
          </button>
        )}

        <Routes>
          <Route path="/login" element={<Login />} />
          
          {isAuthenticated ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/users" element={<Users />} />
              <Route path="/carts" element={<Carts />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
