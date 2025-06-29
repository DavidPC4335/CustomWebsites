# Bros Outdoors Website

A modern, responsive website for the Bros Outdoors social media channel built with React. Features a clean design with social media integration, contact forms, testimonials, and more.

## ✨ Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern UI**: Clean, professional design with smooth animations
- **Theme System**: Easily customizable color scheme through context providers
- **Social Media Integration**: Prominent links to all social media channels
- **Contact Form**: Validated contact form with React Hook Form
- **Testimonials Carousel**: Auto-playing testimonials with manual controls
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Efficient React components with styled-components

## 🚀 Tech Stack

- **React 18** - Modern React with functional components and hooks
- **React Router** - Client-side routing for single-page application
- **Styled Components** - CSS-in-JS for component styling
- **React Hook Form** - Form validation and handling
- **Context API** - Theme management and state sharing

## 🎨 Design System

### Color Palette
- **Primary**: `#4ca694` (Sky Blue)
- **Secondary**: `#0277BD` (Deep Blue)
- **Accent**: `#AED581` (Lime Green)
- **Background**: `#FFFFFF` (White)
- **Light Gray**: `#E0E0E0`

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Responsive scaling** with mobile-first breakpoints

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Navigation header
│   ├── Footer/         # Site footer
│   ├── Hero/           # Hero section
│   ├── Services/       # Services section
│   ├── Testimonials/   # Testimonials carousel
│   ├── SocialMedia/    # Social media links
│   └── UI/             # Base UI components (Button, Card)
├── pages/              # Page components
│   ├── Home/           # Homepage
│   ├── About/          # About page
│   └── Contact/        # Contact page
├── contexts/           # React context providers
│   └── ThemeContext.js # Theme management
├── styles/             # Global styles
│   └── GlobalStyles.js # Styled-components global styles
├── App.js             # Main app component
└── index.js           # Application entry point
```

## 🛠 Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Run Tests**
   ```bash
   npm test
   ```

## 🎯 Key Components

### Theme Provider
The theme system allows easy customization of colors and styles:

```javascript
import { useTheme } from './contexts/ThemeContext';

const MyComponent = () => {
  const { theme, updateTheme } = useTheme();
  
  // Update theme colors
  updateTheme({
    colors: {
      primary: '#new-color'
    }
  });
};
```

### Responsive Design
All components use mobile-first responsive design:

```javascript
const StyledComponent = styled.div`
  padding: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.5rem;
  }
`;
```

## 📱 Pages Overview

### Home Page
- **Hero Section**: Full-screen hero with call-to-action
- **Social Media Grid**: Flashy links to all social channels
- **Services Section**: Cards showcasing offered services
- **Testimonials**: Auto-rotating customer testimonials

### About Page
- **Company Story**: Mission and founding story
- **Team Members**: Meet the team with avatar cards
- **Statistics**: Key metrics and achievements
- **Mission Cards**: Core values and goals

### Contact Page
- **Contact Form**: Validated form with React Hook Form
- **Contact Information**: Phone, email, hours, location
- **Map Section**: Placeholder for interactive map

## 🔧 Customization

### Changing Colors
Update the theme in `src/contexts/ThemeContext.js`:

```javascript
const defaultTheme = {
  colors: {
    primary: '#your-new-primary-color',
    deepBlue: '#your-new-secondary-color',
    // ... other colors
  }
};
```

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.js`
3. Update navigation in `src/components/Header/Header.js`

### Modifying Content
- **Social Media Links**: Update arrays in respective components
- **Services**: Modify `services` array in `ServicesSection.js`
- **Testimonials**: Update `testimonials` array in `TestimonialsSection.js`
- **Team Members**: Modify `teamMembers` array in `About.js`

## 📊 Performance Features

- **Code Splitting**: Route-based code splitting with React.lazy
- **Optimized Images**: Proper image optimization and alt text
- **Efficient Re-renders**: Optimized component structure
- **Smooth Animations**: Hardware-accelerated CSS transitions

## 🔍 SEO Features

- **Meta Tags**: Comprehensive OpenGraph and Twitter meta tags
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Alt Text**: All images include descriptive alt text
- **Structured URLs**: Clean, SEO-friendly routing

## 🚀 Deployment

This project can be deployed to various platforms:

- **Netlify**: Connect GitHub repo for automatic deployments
- **Vercel**: Import project for instant deployment
- **GitHub Pages**: Use `npm run build` and deploy build folder

## 📞 Support

For questions or support, please contact:
- **Email**: hello@brosoutdoors.com
- **Social Media**: Follow @BrosOutdoors on all platforms

## 📄 License

This project is created for Bros Outdoors. All rights reserved.

---

Built with ❤️ by the Bros Outdoors team 