# Oding Windows - Professional Window Cleaning Service

A modern, responsive React website for a professional window cleaning service. Built with React, React Router, and styled-components.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern UI**: Clean, professional design with smooth animations
- **Theme System**: Customizable color scheme using React Context
- **SEO Friendly**: Semantic HTML structure with proper meta tags
- **Performance Optimized**: Efficient component structure and lazy loading

## 🎨 Design

### Color Palette
- **Primary**: Sky Blue (#4FC3F7)
- **Secondary**: Deep Blue (#0277BD)
- **Accent**: Lime Green (#AED581)
- **Background**: White (#FFFFFF)
- **Surface**: Light Gray (#E0E0E0)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd oding-windows
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Navigation header
│   ├── Hero/           # Hero section
│   ├── ServiceHighlights/ # Service cards
│   ├── AboutPreview/   # About section preview
│   ├── TestimonialsPreview/ # Customer testimonials
│   ├── CallToAction/   # CTA section
│   └── Footer/         # Site footer
├── pages/              # Page components
│   ├── Home/           # Landing page
│   ├── About/          # About us page
│   ├── Services/       # Services page
│   ├── Pricing/        # Pricing page
│   ├── Testimonials/   # Testimonials page
│   ├── Contact/        # Contact page
│   └── BookNow/        # Booking page
├── theme/              # Theme configuration
│   └── ThemeProvider.js # Theme context provider
├── styles/             # Global styles
│   └── GlobalStyles.js # Global CSS styles
├── App.js              # Main app component
└── index.js            # Entry point
```

## 🎯 Pages

- **Home**: Hero section, service highlights, about preview, testimonials, and CTA
- **About Us**: Company story, mission, and team information
- **Services**: Detailed list of window cleaning services
- **Pricing**: Service packages and pricing information
- **Testimonials**: Customer reviews and ratings
- **Contact**: Contact form, map, and business information
- **Book Now**: Service booking form and scheduling

## 🛠 Technologies Used

- **React 18**: Modern React with hooks
- **React Router 6**: Client-side routing
- **Styled Components**: CSS-in-JS styling
- **React Icons**: Icon library
- **Google Fonts**: Poppins font family

## 🎨 Customizing the Theme

The theme can be easily customized by modifying the `defaultTheme` object in `src/theme/ThemeProvider.js`:

```javascript
const defaultTheme = {
  colors: {
    primary: '#4FC3F7',    // Change primary color
    secondary: '#0277BD',   // Change secondary color
    accent: '#AED581',      // Change accent color
    // ... other colors
  },
  // ... other theme properties
};
```

You can also update colors dynamically using the theme context:

```javascript
import { useTheme } from './theme/ThemeProvider';

const MyComponent = () => {
  const { updateColors } = useTheme();
  
  const changeTheme = () => {
    updateColors({
      primary: '#FF6B6B',
      secondary: '#4ECDC4'
    });
  };
  
  return <button onClick={changeTheme}>Change Theme</button>;
};
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (one-way operation)

## 🌐 Deployment

The project can be deployed to any static hosting service:

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically build and deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://yourusername.github.io/oding-windows"`
3. Add deploy scripts and run: `npm run deploy`

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Support

For support, email info@odingwindows.com or create an issue in the repository.

---

Built with ❤️ for Oding Windows 