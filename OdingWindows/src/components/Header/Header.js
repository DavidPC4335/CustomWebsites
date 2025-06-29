import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { HeaderContainer, Nav, Logo, NavList, NavItem, NavLink, MobileMenuButton, MobileMenu, CTAButton } from './Header.styles';
import logo from '../../assets/logo.png';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <div className="container">
        <Nav>
          <Logo to="/">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
              <img src={logo} alt="Oding Windows" style={{ width: '50px', height: 'auto' }} />
              {/* <span>Oding Windows</span> */}
            </div>
          </Logo>
          
          <NavList $isOpen={isOpen}>
            {navItems.map((item) => (
              <NavItem key={item.path}>
                <NavLink 
                  to={item.path}
                  $isActive={location.pathname === item.path}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>

          <CTAButton to="/book-now">
            <FaPhone />
            Book Now
          </CTAButton>

          <MobileMenuButton onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </Nav>
      </div>

      <MobileMenu $isOpen={isOpen}>
        {navItems.map((item) => (
          <NavLink 
            key={item.path}
            to={item.path}
            $isActive={location.pathname === item.path}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <CTAButton to="/book-now" onClick={() => setIsOpen(false)}>
          <FaPhone />
          Book Now
        </CTAButton>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header; 