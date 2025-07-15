# Youngsters Services Website

A modern, clean, and responsive React website for Youngsters Services - specializing in delivery, moving, and junk removal services.

## Features

- **Responsive Design**: Mobile-first approach with clean, modern styling
- **CSS Variables**: Easy customization of colors and spacing
- **Service Priority**: Highlights services in order of importance (Deliveries, Moving, Junk Removal)
- **Interactive Quote Calculator**: Real-time estimate generation
- **Customer Testimonials**: Social proof with 5-star ratings
- **Professional Layout**: Sticky header, hero section, and comprehensive footer

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation and logo
│   ├── Hero.js            # Hero section with CTA
│   ├── Services.js        # Service cards
│   ├── WhyChooseUs.js     # Benefits section
│   ├── Testimonials.js    # Customer reviews
│   ├── Pricing.js         # Quote calculator
│   ├── CTABanner.js       # Call-to-action banner
│   └── Footer.js          # Footer with contact info
├── App.js                 # Main app component
├── index.js               # Entry point
└── index.css              # Styles with CSS variables
```

## Customization

### Colors
All colors are defined as CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #0D3B66;    /* Deep Blue */
  --accent-color: #F95738;     /* Bright Orange */
  --background-color: #F5F7FA;  /* Light Gray */
  --secondary-text: #6B7280;   /* Slate Gray */
  --success-color: #3FA34D;    /* Leaf Green */
  --cta-text: #FFFFFF;         /* White on Orange */
}
```

### Spacing
Spacing uses a consistent 8px scale:
- `--spacing-xs: 8px`
- `--spacing-sm: 16px`
- `--spacing-md: 32px`
- `--spacing-lg: 64px`
- `--spacing-xl: 96px`

## Services

The website highlights three main services in order of priority:

1. **Delivery Services** - Fast and reliable delivery solutions
2. **Moving Services** - Professional residential and commercial moving
3. **Junk Removal** - Efficient and eco-friendly disposal services

## Build for Production

To create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## Technologies Used

- React 18
- CSS3 with CSS Variables
- Font Awesome Icons
- Inter Font Family
- Responsive Grid Layout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile) 