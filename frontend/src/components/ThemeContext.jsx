import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // default to light mode

  const ToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    localStorage.setItem((prevTheme)=>(prevTheme==='light'?'dark' :'light'))
  };

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
