import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${props => props.scrolled 
    ? 'rgba(255, 255, 255, 0.98)' 
    : 'rgba(255, 255, 255, 0.95)'
  };
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: ${props => props.scrolled ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(0, 0, 0, 0.04)'};
  box-shadow: ${props => props.scrolled 
    ? '0 8px 32px rgba(0, 0, 0, 0.12)' 
    : '0 4px 20px rgba(0, 0, 0, 0.05)'
  };
  z-index: 1000;
  transition: all 0.3s ease;
  padding: ${props => props.scrolled ? '0.75rem 0' : '1.25rem 0'};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      ${props => props.theme.colors.primary}40 50%, 
      transparent 100%
    );
    opacity: ${props => props.scrolled ? 1 : 0};
    transition: opacity 0.3s ease;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${props => props.theme.colors.deepBlue} 0%, ${props => props.theme.colors.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.1);
  }
  
  img {
    height: 45px;
    width: auto;
    margin-right: 0.75rem;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
    transition: all 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    
    img {
      height: 38px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.98) 0%, 
      rgba(248, 250, 252, 0.95) 100%
    );
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    transform: translateX(${props => props.isOpen ? '0' : '100%'});
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.5px;
  
  &.active {
    color: ${props => props.theme.colors.primary};
    background: linear-gradient(135deg, 
      ${props => props.theme.colors.primary}15 0%, 
      ${props => props.theme.colors.primary}08 100%
    );
    box-shadow: 0 2px 8px ${props => props.theme.colors.primary}20;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    background: linear-gradient(135deg, 
      ${props => props.theme.colors.primary}10 0%, 
      ${props => props.theme.colors.primary}05 100%
    );
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${props => props.theme.colors.primary}15;
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      ${props => props.theme.colors.primary} 0%, 
      ${props => props.theme.colors.deepBlue} 100%
    );
    transition: all 0.3s ease;
    transform: translateX(-50%);
    border-radius: 1px;
  }
  
  &.active::before,
  &:hover::before {
    width: 80%;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.4rem;
    padding: 1rem 2rem;
    border-radius: ${props => props.theme.borderRadius.large};
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary}10 0%, 
    ${props => props.theme.colors.deepBlue}08 100%
  );
  border: 1px solid ${props => props.theme.colors.primary}20;
  border-radius: ${props => props.theme.borderRadius.medium};
  cursor: pointer;
  padding: 0.75rem;
  width: 44px;
  height: 44px;
  z-index: 1001;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: linear-gradient(135deg, 
      ${props => props.theme.colors.primary}20 0%, 
      ${props => props.theme.colors.deepBlue}15 100%
    );
    transform: scale(1.05);
    box-shadow: 0 4px 12px ${props => props.theme.colors.primary}20;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: flex;
  }
  
  span {
    width: 20px;
    height: 2px;
    background: linear-gradient(90deg, 
      ${props => props.theme.colors.deepBlue} 0%, 
      ${props => props.theme.colors.primary} 100%
    );
    margin: 2px 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center;
    border-radius: 1px;
    
    &:nth-child(1) {
      transform: ${props => props.isOpen 
        ? 'rotate(45deg) translate(5px, 5px)' 
        : 'none'
      };
    }
    
    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
      transform: ${props => props.isOpen ? 'scale(0)' : 'scale(1)'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.isOpen 
        ? 'rotate(-45deg) translate(5px, -5px)' 
        : 'none'
      };
    }
  }
`;

const ActionButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.deepBlue} 100%
  );
  color: white;
  text-decoration: none;
  border-radius: ${props => props.theme.borderRadius.large};
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px ${props => props.theme.colors.primary}30;
  position: relative;
  overflow: hidden;
  display: inline-block;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.2) 50%, 
      transparent 100%
    );
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${props => props.theme.colors.primary}40;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin-top: 1rem;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: ${props => props.theme.borderRadius.large};
    box-shadow: 0 6px 20px ${props => props.theme.colors.primary}25;
    
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 25px ${props => props.theme.colors.primary}35;
    }
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer scrolled={isScrolled}>
      <NavContainer>
        <Logo to="/">
          <img src={logo} alt="Bros Outdoors Logo" />
          Bros Outdoors
        </Logo>
        
        <NavLinks isOpen={isMobileMenuOpen}>
          <NavLink 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About
          </NavLink>
          <ActionButton to="/contact">
            Contact Us
          </ActionButton>
        </NavLinks>
        
        <HamburgerButton 
          isOpen={isMobileMenuOpen} 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header; 