import styled from 'styled-components';

const Button = styled.button`
  padding: ${props => props.size === 'large' ? '1rem 2rem' : '0.75rem 1.5rem'};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-size: ${props => props.size === 'large' ? '1.1rem' : '1rem'};
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
  min-width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  background: ${props => {
    switch (props.variant) {
      case 'secondary':
        return props.theme.colors.white;
      case 'outline':
        return 'transparent';
      default:
        return props.theme.colors.primary;
    }
  }};
  
  color: ${props => {
    switch (props.variant) {
      case 'secondary':
        return props.theme.colors.deepBlue;
      case 'outline':
        return props.theme.colors.primary;
      default:
        return props.theme.colors.white;
    }
  }};
  
  border-color: ${props => {
    switch (props.variant) {
      case 'outline':
        return props.theme.colors.primary;
      default:
        return 'transparent';
    }
  }};
  
  box-shadow: ${props => props.theme.shadows.light};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium};
    
    background: ${props => {
      switch (props.variant) {
        case 'secondary':
          return props.theme.colors.lightGray;
        case 'outline':
          return props.theme.colors.primary;
        default:
          return props.theme.colors.deepBlue;
      }
    }};
    
    color: ${props => {
      switch (props.variant) {
        case 'outline':
          return props.theme.colors.white;
        default:
          return props.variant === 'secondary' ? props.theme.colors.deepBlue : props.theme.colors.white;
      }
    }};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    
    &:hover {
      transform: none;
      box-shadow: ${props => props.theme.shadows.light};
    }
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.size === 'large' ? '0.875rem 1.5rem' : '0.625rem 1.25rem'};
    font-size: ${props => props.size === 'large' ? '1rem' : '0.9rem'};
  }
`;

export default Button; 