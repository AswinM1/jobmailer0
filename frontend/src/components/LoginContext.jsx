// LoginContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
const LoginContext = createContext();

// Create a custom hook to use the context
export const useLogin = () => {
  return useContext(LoginContext);
};

// Provider component
export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('loginvalue', true); // Store login status in localStorage
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('loginvalue', false); // Store login status in localStorage
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
