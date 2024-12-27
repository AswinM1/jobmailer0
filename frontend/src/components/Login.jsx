import React, { useContext,useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from './LoginContext';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom'; // Import Link component

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const { isLoggedIn, login: loginContext } = useLogin(); // Use the context here
  const { theme } = useContext(ThemeContext); // Access theme from context
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      alert('Please enter a valid email');
      return;
    }

    if (password.length < 7) {
      alert('Password must be at least 7 characters long');
      return;
    }

    // try {
    //   // Send login request to the backend API
    //   const response = await fetch('https://your-backend-api.com/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   const data = await response.json();

      // if (response.ok) {
      //   // On successful login
        loginContext(); // Store login in context
        localStorage.setItem('loginvalue', 'true'); // Store login status in localStorage
        nav('/home'); // Navigate to home
      // } else {
      //   // On failure (wrong credentials or other issues)
      //   setLoginError(data.message || 'Login failed');
      // }
    // } catch (error) {
    //   // Handle any network or unexpected errors
    //   console.error('Error logging in:', error);
    //   setLoginError('An error occurred, please try again later');
    // }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: theme === 'light' ? '#f4f7fc' : '#121212',
        color: theme === 'light' ? '#000' : '#fff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          padding: '40px',
          backgroundColor: theme === 'light' ? '#fff' : '#2a2a2a',
          borderRadius: '10px',
          boxShadow: theme === 'light' ? '0 4px 8px rgba(0, 0, 0, 0.1)' : '0 4px 8px rgba(0, 0, 0, 0.4)',
          width: '100%',
          maxWidth: '400px',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: theme === 'light' ? '#333' : '#fff',
          }}
        >
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label
              htmlFor="email"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '8px',
                display: 'block',
                color: theme === 'light' ? '#333' : '#bbb',
              }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '1rem',
                borderRadius: '8px',
                border: theme === 'light' ? '1px solid #ddd' : '1px solid #555',
                backgroundColor: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#333' : '#fff',
                transition: 'all 0.3s',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label
              htmlFor="password"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '8px',
                display: 'block',
                color: theme === 'light' ? '#333' : '#bbb',
              }}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '1rem',
                borderRadius: '8px',
                border: theme === 'light' ? '1px solid #ddd' : '1px solid #555',
                backgroundColor: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#333' : '#fff',
                transition: 'all 0.3s',
              }}
            />
          </div>

          {loginError && (
            <p
              style={{
                color: 'red',
                fontSize: '14px',
                marginBottom: '20px',
                fontWeight: '600',
              }}
            >
              {loginError}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              backgroundColor: theme === 'light' ? '#4CAF50' : '#2196F3',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease-in-out',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = theme === 'light' ? '#45a049' : '#1976D2')}
            onMouseOut={(e) => (e.target.style.backgroundColor = theme === 'light' ? '#4CAF50' : '#2196F3')}
          >
            Login
          </button>
        </form>

        <p
          style={{
            textAlign: 'center',
            marginTop: '20px',
            color: theme === 'light' ? '#333' : '#bbb',
          }}
        >
          Don't have an account?{' '}
          <Link
            to="/signup" // Navigate to the Sign Up page
            style={{
              color: theme === 'light' ? '#4CAF50' : '#2196F3',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
