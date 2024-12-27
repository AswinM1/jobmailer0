import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from './LoginContext';
import { ThemeContext } from './ThemeContext';

function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  const { theme } = React.useContext(ThemeContext); // Access theme from context
  const nav = useNavigate();
  const { login: loginContext } = useLogin(); // Use context for login

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form inputs
    if (!email.includes('@')) {
      setSignupError('Please enter a valid email');
      return;
    }

    if (username.length < 3) {
      setSignupError('Username must be at least 3 characters long');
      return;
    }

    if (password.length < 7) {
      setSignupError('Password must be at least 7 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setSignupError('Passwords do not match');
      return;
    }

    // Simulate successful signup
    loginContext();
    localStorage.setItem('loginvalue', 'true');
    nav('/home');
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
          Sign Up
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
              htmlFor="username"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '8px',
                display: 'block',
                color: theme === 'light' ? '#333' : '#bbb',
              }}
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
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

          <div style={{ marginBottom: '20px' }}>
            <label
              htmlFor="confirmPassword"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '8px',
                display: 'block',
                color: theme === 'light' ? '#333' : '#bbb',
              }}
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
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

          {signupError && (
            <p
              style={{
                color: 'red',
                fontSize: '14px',
                marginBottom: '20px',
                fontWeight: '600',
              }}
            >
              {signupError}
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
