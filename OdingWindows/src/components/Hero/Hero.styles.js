import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, rgba(79, 195, 247, 0.9), rgba(2, 119, 189, 0.8)),
              url('https://images.unsplash.com/photo-1496092607007-ca127e0b6a10?q=80&w=2110&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center;
  color: ${({ theme }) => theme.colors.text.white};
  padding-top: 80px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  > .container {
    position: relative;
    z-index: 2;
  }
`;

export const HeroContent = styled.div`
  max-width: 700px;
  text-align: center;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: left;
    margin: 0;
  }
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes['4xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  line-height: 1.1;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  span {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fonts.sizes['5xl']};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fonts.sizes['6xl']};
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  }
`;

export const HeroDescription = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

export const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  color: rgba(255, 255, 255, 0.9);

  svg {
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: flex-start;
  }
`;

export const PrimaryButton = styled(Link)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, #8BC34A);
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: all 0.3s ease;
  text-decoration: none;
  min-width: 200px;
  justify-content: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const SecondaryButton = styled(Link)`
  background: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.text.white};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  transition: all 0.3s ease;
  text-decoration: none;
  min-width: 200px;
  text-align: center;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.text.white};
  }
`; 