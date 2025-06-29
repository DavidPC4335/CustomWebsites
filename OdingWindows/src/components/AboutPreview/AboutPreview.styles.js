import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AboutPreviewContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const AboutText = styled.div`
  order: 2;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
  }
`;

export const AboutTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const AboutDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};

  svg {
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`;

export const LearnMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: ${({ theme }) => theme.colors.text.white};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.md};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    color: ${({ theme }) => theme.colors.text.white};

    svg {
      transform: translateX(4px);
    }
  }

  svg {
    transition: transform 0.3s ease;
  }
`;

export const AboutImage = styled.div`
  order: 1;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`; 