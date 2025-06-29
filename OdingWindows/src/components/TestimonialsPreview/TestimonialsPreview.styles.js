import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TestimonialsPreviewContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const SectionTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TestimonialCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: #FFD700;
`;

export const TestimonialText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-style: italic;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const CustomerInfo = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.surface};
  padding-top: ${({ theme }) => theme.spacing.md};
`;

export const CustomerName = styled.h4`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const CustomerRole = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  margin-bottom: 0;
`;

export const ViewAllButton = styled(Link)`
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
  margin: 0 auto;
  display: flex;
  justify-content: center;
  max-width: 250px;

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