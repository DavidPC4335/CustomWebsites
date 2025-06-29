import React, { createContext, useContext, useState } from 'react';

const defaultTheme = {
  colors: {
    primary: '#4ca694',
    white: '#FFFFFF',
    deepBlue: '#0277BD',
    lightGray: '#E0E0E0',
    limeGreen: '#AED581',
    dark: '#2C2C2C',
    text: '#333333',
    textLight: '#666666'
  },
  fonts: {
    primary: "'Poppins', sans-serif"
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px'
  },
  shadows: {
    light: '0 2px 10px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 20px rgba(0, 0, 0, 0.15)',
    heavy: '0 8px 30px rgba(0, 0, 0, 0.2)'
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '16px',
    round: '50%'
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const updateTheme = (newTheme) => {
    setTheme(prevTheme => ({
      ...prevTheme,
      ...newTheme,
      colors: {
        ...prevTheme.colors,
        ...(newTheme.colors || {})
      }
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 