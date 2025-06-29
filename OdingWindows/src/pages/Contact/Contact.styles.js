import styled from 'styled-components';

export const ContactContainer = styled.div`
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
  opacity: 0.08;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
  }

  &::before {
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.colors.primary}, 
      ${({ theme }) => theme.colors.secondary});
    top: -150px;
    right: -150px;
    animation: float 8s ease-in-out infinite;
  }

  &::after {
    width: 300px;
    height: 300px;
    background: linear-gradient(45deg, 
      ${({ theme }) => theme.colors.accent}, 
      ${({ theme }) => theme.colors.primary});
    bottom: -100px;
    left: -100px;
    animation: float 10s ease-in-out infinite reverse;
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

export const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

export const ContactTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes['5xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.secondary}, 
    ${({ theme }) => theme.colors.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fonts.sizes['4xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  }
`;

export const ContactSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['4xl']};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['3xl']};
  }
`;

export const ContactInfoSection = styled.div`
  order: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
  }
`;

export const ContactCard = styled.div`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.9) 0%, 
    rgba(79, 195, 247, 0.05) 100%);
  border: 1px solid rgba(79, 195, 247, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xl};
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    background: rgba(79, 195, 247, 0.08);
    transform: translateY(-2px);
    border-color: rgba(79, 195, 247, 0.2);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const ContactIcon = styled.div`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}, 
    ${({ theme }) => theme.colors.secondary});
  border-radius: ${({ theme }) => theme.borderRadius.full};
  box-shadow: ${({ theme }) => theme.shadows.md};
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 50px;
    height: 50px;
    font-size: ${({ theme }) => theme.fonts.sizes.xl};
  }
`;

export const ContactDetails = styled.div`
  flex: 1;
`;

export const ContactItemTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ContactText = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.5;
  margin: ${({ theme }) => theme.spacing.xs} 0;

  &:last-child {
    margin-bottom: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.fonts.weights.semibold};
    transition: all 0.3s ease;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    margin: -${({ theme }) => theme.spacing.xs} -${({ theme }) => theme.spacing.sm};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      background: rgba(79, 195, 247, 0.1);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

export const ContactFormSection = styled.div`
  order: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
  }
`;

export const ContactForm = styled.form`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(255, 255, 255, 0.9) 100%);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['3xl']};
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1), 
              0 0 0 1px rgba(79, 195, 247, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(79, 195, 247, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(79, 195, 247, 0.1), 
      transparent);
    animation: shimmer 4s infinite;
  }

  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['2xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const FormTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes.xl};
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;
  z-index: 1;
`;

export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(79, 195, 247, 0.1);
    transform: translateY(-1px);
  }

  &:hover {
    border-color: rgba(79, 195, 247, 0.5);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background};
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(79, 195, 247, 0.1);
    transform: translateY(-1px);
  }

  &:hover {
    border-color: rgba(79, 195, 247, 0.5);
  }

  option {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background};
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 150px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(79, 195, 247, 0.1);
    transform: translateY(-1px);
  }

  &:hover {
    border-color: rgba(79, 195, 247, 0.5);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}, 
    ${({ theme }) => theme.colors.secondary});
  color: ${({ theme }) => theme.colors.text.white};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  font-family: ${({ theme }) => theme.fonts.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 15px 35px rgba(79, 195, 247, 0.3), 
              0 5px 15px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(79, 195, 247, 0.4), 
                0 10px 20px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.colors.secondary}, 
      ${({ theme }) => theme.colors.primary});

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 20px 40px rgba(79, 195, 247, 0.4), 
                0 10px 20px rgba(0, 0, 0, 0.15),
                0 0 0 3px rgba(79, 195, 247, 0.3);
  }
`;

export const SuccessMessage = styled.div`
  background: linear-gradient(135deg, 
    rgba(76, 175, 80, 0.15), 
    rgba(174, 213, 129, 0.15),
    rgba(255, 255, 255, 0.9));
  border: 2px solid ${({ theme }) => theme.colors.success};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['4xl']};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing['3xl']};
  box-shadow: 0 25px 50px rgba(76, 175, 80, 0.2), 
              0 0 0 1px rgba(76, 175, 80, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
  position: relative;
  overflow: hidden;
  animation: successSlideIn 0.5s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, 
      transparent 30%, 
      rgba(76, 175, 80, 0.1) 50%, 
      transparent 70%);
    animation: successShimmer 2s ease-out;
  }

  @keyframes successSlideIn {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0.9);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes successShimmer {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.colors.success}, 
      ${({ theme }) => theme.colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    position: relative;
    z-index: 1;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.6;
    position: relative;
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing['2xl']};
    
    h2 {
      font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
    }
    
    p {
      font-size: ${({ theme }) => theme.fonts.sizes.md};
    }
  }
`;

export const MapSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing['3xl']};
`;

export const MapPlaceholder = styled.div`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.9) 0%, 
    rgba(79, 195, 247, 0.05) 100%);
  border: 1px solid rgba(79, 195, 247, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['3xl']};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.lg};

  h3 {
    font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  }

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing['2xl']};
    
    h3 {
      font-size: ${({ theme }) => theme.fonts.sizes.xl};
    }
    
    p {
      font-size: ${({ theme }) => theme.fonts.sizes.md};
    }
  }
`; 