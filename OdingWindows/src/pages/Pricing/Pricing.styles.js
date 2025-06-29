import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PricingContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  background: linear-gradient(135deg, 
    rgba(79, 195, 247, 0.02) 0%,
    rgba(174, 213, 129, 0.02) 25%,
    rgba(255, 255, 255, 1) 50%,
    rgba(79, 195, 247, 0.03) 75%,
    rgba(2, 119, 189, 0.05) 100%);
  position: relative;
  overflow: hidden;
`;

export const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0.06;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
  }

  &::before {
    width: 450px;
    height: 450px;
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.colors.primary}, 
      ${({ theme }) => theme.colors.secondary});
    top: -150px;
    right: -150px;
    animation: float 20s ease-in-out infinite;
  }

  &::after {
    width: 300px;
    height: 300px;
    background: linear-gradient(45deg, 
      ${({ theme }) => theme.colors.accent}, 
      ${({ theme }) => theme.colors.primary});
    bottom: -100px;
    left: -100px;
    animation: float 16s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(180deg); }
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing['4xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing['3xl']};
  }
`;

export const HeroSection = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(135deg, rgba(79, 195, 247, 0.85), rgba(2, 119, 189, 0.75)),
              url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  margin-left: ${({ theme }) => theme.spacing.lg};
  margin-right: ${({ theme }) => theme.spacing.lg};
  position: relative;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.xl};

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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-left: ${({ theme }) => theme.spacing.md};
    margin-right: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.md};
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes['5xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fonts.sizes['4xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const PricingCard = styled.div`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(255, 255, 255, 0.9) 100%);
  padding: ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ popular }) => 
    popular 
      ? '0 30px 60px rgba(79, 195, 247, 0.25), 0 0 0 2px rgba(79, 195, 247, 0.3)'
      : '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(79, 195, 247, 0.1)'
  };
  border: ${({ popular, theme }) => 
    popular 
      ? `2px solid ${theme.colors.primary}`
      : '1px solid rgba(79, 195, 247, 0.1)'
  };
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  transform: ${({ popular }) => popular ? 'scale(1.05)' : 'scale(1)'};

  &:hover {
    transform: ${({ popular }) => popular ? 'scale(1.08)' : 'scale(1.03)'};
    box-shadow: ${({ popular }) => 
      popular 
        ? '0 35px 70px rgba(79, 195, 247, 0.3), 0 0 0 2px rgba(79, 195, 247, 0.4)'
        : '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(79, 195, 247, 0.2)'
    };
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xl};
    transform: scale(1);
    
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const PopularBadge = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}, 
    ${({ theme }) => theme.colors.secondary});
  color: ${({ theme }) => theme.colors.text.white};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: 2;
`;

export const PricingHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
  z-index: 1;
`;

export const PricingIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}, 
    ${({ theme }) => theme.colors.secondary});
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.white};
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const PricingTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const PricingSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const PricingPrice = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fonts.sizes['4xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}, 
    ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  }
`;

export const PricingPeriod = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.fonts.weights.normal};
`;

export const PricingFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.xl};
  position: relative;
  z-index: 1;
`;

export const PricingFeature = styled.li`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  color: ${({ included, theme }) => 
    included ? theme.colors.text.primary : theme.colors.text.secondary
  };
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  opacity: ${({ included }) => included ? 1 : 0.6};
  line-height: 1.5;

  svg {
    color: ${({ included, theme }) => 
      included ? theme.colors.primary : theme.colors.text.secondary
    };
    margin-right: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
    flex-shrink: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
  }
`;

export const PricingButton = styled(Link)`
  display: block;
  text-align: center;
  background: ${({ popular, theme }) => 
    popular 
      ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
      : `linear-gradient(135deg, rgba(79, 195, 247, 0.1), rgba(174, 213, 129, 0.1))`
  };
  color: ${({ popular, theme }) => 
    popular ? theme.colors.text.white : theme.colors.primary
  };
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: ${({ popular, theme }) => 
    popular 
      ? `0 10px 25px rgba(79, 195, 247, 0.3)`
      : `0 5px 15px rgba(0, 0, 0, 0.1)`
  };
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border: ${({ popular, theme }) => 
    popular ? 'none' : `2px solid ${theme.colors.primary}`
  };

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ popular, theme }) => 
      popular 
        ? `0 15px 35px rgba(79, 195, 247, 0.4)`
        : `0 10px 25px rgba(79, 195, 247, 0.2)`
    };
    color: ${({ popular, theme }) => 
      popular ? theme.colors.text.white : theme.colors.text.white
    };
    background: ${({ popular, theme }) => 
      popular 
        ? `linear-gradient(135deg, ${theme.colors.secondary}, ${theme.colors.primary})`
        : `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
    };
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }
`;

export const PriceNote = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing['4xl']};
`;

export const AddOnsSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  }
`;

export const AddOnsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const AddOnCard = styled.div`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(255, 255, 255, 0.9) 100%);
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08), 
              0 0 0 1px rgba(79, 195, 247, 0.1);
  border: 1px solid rgba(79, 195, 247, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12), 
                0 0 0 1px rgba(79, 195, 247, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const AddOnTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  position: relative;
  z-index: 1;
`;

export const AddOnPrice = styled.div`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}, 
    ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  position: relative;
  z-index: 1;
`;

export const AddOnDescription = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.5;
  position: relative;
  z-index: 1;
`;

export const FAQSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

export const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const FAQItem = styled.div`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(255, 255, 255, 0.9) 100%);
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08), 
              0 0 0 1px rgba(79, 195, 247, 0.1);
  border: 1px solid rgba(79, 195, 247, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12), 
                0 0 0 1px rgba(79, 195, 247, 0.2);
  }
`;

export const FAQQuestion = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: left;
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(79, 195, 247, 0.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const FAQToggle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  margin-left: ${({ theme }) => theme.spacing.md};
  flex-shrink: 0;
`;

export const FAQAnswer = styled.div`
  padding: ${({ open }) => open ? '0 24px 24px 24px' : '0 24px'};
  max-height: ${({ open }) => open ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
    padding: ${({ open }) => open ? '0 16px 16px 16px' : '0 16px'};
  }
`;

export const CTASection = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing['2xl']};
  background: linear-gradient(135deg, 
    rgba(79, 195, 247, 0.08) 0%, 
    rgba(174, 213, 129, 0.08) 100%);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid rgba(79, 195, 247, 0.2);
  box-shadow: ${({ theme }) => theme.shadows.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  }
`;

export const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  }
`;

export const CTAText = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes.md};
  }
`;

export const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}, 
    ${({ theme }) => theme.colors.secondary});
  color: ${({ theme }) => theme.colors.text.white};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 15px 35px rgba(79, 195, 247, 0.3), 
              0 5px 15px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(79, 195, 247, 0.4), 
                0 10px 20px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.colors.secondary}, 
      ${({ theme }) => theme.colors.primary});
    color: ${({ theme }) => theme.colors.text.white};
  }

  &:active {
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes.md};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  }
`; 