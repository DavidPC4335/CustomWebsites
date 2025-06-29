import styled from 'styled-components';

const Card = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.light};
  padding: ${props => props.padding || '2rem'};
  transition: all 0.3s ease;
  height: ${props => props.height || 'auto'};
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
  
  .card-icon {
    width: 60px;
    height: 60px;
    background: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.borderRadius.round};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.white};
    font-size: 1.5rem;
    flex-shrink: 0;
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${props => props.theme.colors.deepBlue};
    margin-bottom: 1rem;
  }
  
  .card-description {
    color: ${props => props.theme.colors.textLight};
    line-height: 1.6;
    flex-grow: 1;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.5rem;
    
    .card-icon {
      width: 50px;
      height: 50px;
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
    
    .card-title {
      font-size: 1.125rem;
    }
  }
`;

export default Card; 