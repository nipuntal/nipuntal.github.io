# React + Three.js + Tailwind CSS Webpage

A modern, interactive web application built with React, Three.js for 3D graphics, and Tailwind CSS for styling.

## Features

- 🎨 **Modern UI**: Beautiful gradient background with glassmorphism effects
- 🎮 **Interactive 3D Scene**: Rotate, pan, and zoom around 3D objects
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- ⚡ **Fast Development**: Built with Vite for lightning-fast development
- 🎯 **Three.js Integration**: React Three Fiber for seamless 3D graphics
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Tech Stack

- **React 18** - Modern React with hooks
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Building for Production

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── App.jsx            # Main application component
│   ├── App.css            # Component-specific styles
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles with Tailwind
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

## 3D Scene Controls

- **Left Click + Drag**: Rotate the camera around the scene
- **Right Click + Drag**: Pan the camera
- **Scroll**: Zoom in/out

## Customization

### Colors
Modify the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: '#3B82F6',    // Blue
  secondary: '#10B981',  // Green
  accent: '#F59E0B',     // Yellow
}
```

### 3D Objects
Add or modify 3D objects in the `Scene` component in `App.jsx`:
```jsx
<Box position={[x, y, z]} args={[width, height, depth]}>
  <meshStandardMaterial color="#color" />
</Box>
```

### Styling
Customize the UI by modifying the Tailwind classes in `App.jsx` or adding custom styles in `App.css`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Browser Support

This application works in all modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- WebGL (for Three.js)

## License

MIT License - feel free to use this project for your own purposes! 