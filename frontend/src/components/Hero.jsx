import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Make sure to import the ThemeContext
import { Link } from 'react-router-dom';
import { useLogin } from './LoginContext';

function Hero() {
  const { theme } = useContext(ThemeContext); // Get the theme from context
  const { isLoggedIn } = useLogin(); // Get login status from context

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme === 'light' ? 'black' : 'white', // Text color changes based on theme
        textAlign: 'center',
        padding: '20px',
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#121212', // Background color changes based on theme
      }}
    >
      <div style={{ maxWidth: '900px' }}>
        <h1
          style={{
            fontSize: '80px',
            marginBottom: '20px',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            wordSpacing: '1px',
            lineHeight: '80px',
            backgroundClip: theme === 'light' ? 'white' : 'black',
          }}
        >
          Perfect Emails in <span style={{ color: '#0077ff' }}>Seconds.</span>
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            marginBottom: '30px',
            color: theme === 'light' ? 'gray' : 'lightgray', // Text color changes based on theme
            opacity: '90%',
          }}
        >
          Generate HR friendly emails which go straight into the inbox, not in spam.
        </p>

        {/* Conditional rendering based on login status */}
        {isLoggedIn ? (
          <Link to="/home">
            <button
              style={{
                padding: '10px 20px',
                fontSize: '1rem',
                color: '#fff',
                backgroundColor: '#0077ff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#004fc4')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#0077ff')}
            >
              Get Started
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button
              style={{
                padding: '10px 20px',
                fontSize: '1rem',
                color: '#fff',
                backgroundColor: '#0077ff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#004fc4')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#0077ff')}
            >
              Get Started
            </button>
         </Link> 
         
        )}
      </div>
    </div>
  );
}

export default Hero;
