import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    background-color: ${props => props.theme.colors.white};
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 1.25rem;
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: ${props => props.theme.colors.textLight};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    font-family: inherit;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      padding: 0 0.75rem;
    }
  }

  .section {
    padding: 5rem 0;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      padding: 3rem 0;
    }
  }

  .text-center {
    text-align: center;
  }

  .mb-1 { margin-bottom: 1rem; }
  .mb-2 { margin-bottom: 2rem; }
  .mb-3 { margin-bottom: 3rem; }
  .mb-4 { margin-bottom: 4rem; }

  .mt-1 { margin-top: 1rem; }
  .mt-2 { margin-top: 2rem; }
  .mt-3 { margin-top: 3rem; }
  .mt-4 { margin-top: 4rem; }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.lightGray};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.deepBlue};
  }
`;

export default GlobalStyles;
