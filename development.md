# 🛠️ SimWork Development Guide

## 🏗️ Tech Stack & Architecture

### Core Framework
- **Next.js 15.3.3**: App Router, Server Components, Streaming
- **React 19.0.0**: Latest features, concurrent rendering
- **Node.js**: Runtime environment

### Styling & Design
- **Tailwind CSS v3**: Utility-first CSS framework
- **PostCSS**: CSS processing and optimization
- **Custom CSS Variables**: Dynamic theming support

### Animation & Effects
- **GSAP 3.12+**: Professional animation library
  - ScrollTrigger: Scroll-based animations
  - Timeline: Complex animation sequences
  - MotionPath: Advanced path animations
- **Three.js 0.160+**: 3D graphics and WebGL
- **Phaser 3.70+**: 2D game engine for office simulation

### State Management
- **React Context**: Global state management
- **localStorage**: Persistent user data
- **Cookies**: Session management
- **JSON**: Simulated backend data

### Development Tools
- **ESLint**: Code linting (disabled for MVP speed)
- **Prettier**: Code formatting
- **Git**: Version control

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.js                 # Root layout with global providers
│   ├── page.js                   # Homepage with hero section
│   ├── demo/                     # Demo page with simulation
│   ├── pitch/                    # Pitch deck page
│   ├── why-us/                   # Why us page
│   ├── roadmap/                  # Roadmap page
│   └── signup/                   # Sign-up page
├── components/                   # Reusable components
│   ├── ui/                       # Basic UI components
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── Modal.js
│   │   └── Input.js
│   ├── layout/                   # Layout components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── Navigation.js
│   ├── effects/                  # Visual effects components
│   │   ├── MatrixEffect.js
│   │   ├── ParallaxScroll.js
│   │   ├── ThreeScene.js
│   │   └── GSAPAnimations.js
│   ├── simulation/               # Simulation components
│   │   ├── OfficeMap.js
│   │   ├── WorkStation.js
│   │   ├── QuestSystem.js
│   │   └── UserProfile.js
│   └── sections/                 # Page sections
│       ├── HeroSection.js
│       ├── ProblemSection.js
│       ├── SolutionSection.js
│       ├── FeaturesSection.js
│       ├── PricingSection.js
│       └── TestimonialsSection.js
├── lib/                          # Utilities and configurations
│   ├── utils.js                  # Helper functions
│   ├── constants.js              # App constants
│   ├── animations.js             # GSAP animation presets
│   ├── three-utils.js            # Three.js utilities
│   └── quest-engine.js           # AI quest generation logic
├── styles/                       # Global styles
│   ├── globals.css               # Global CSS and Tailwind imports
│   ├── animations.css            # Custom animation classes
│   └── effects.css               # Visual effects styles
├── data/                         # Static data and content
│   ├── quests.json               # Quest templates
│   ├── users.json                # Sample user data
│   ├── testimonials.json         # Testimonials data
│   └── pricing.json              # Pricing plans
└── public/                       # Static assets
    ├── images/                   # Image assets
    ├── models/                   # 3D models
    ├── sounds/                   # Audio files
    └── icons/                    # Icon files
```

## 🎨 Design System

### Color Palette
```css
:root {
  /* Primary Colors */
  --primary-900: #0A0E27;
  --primary-800: #1A1F3A;
  --primary-700: #2A2D3A;
  --primary-600: #3A3F4A;
  --primary-500: #4A4F5A;
  
  /* Accent Colors */
  --accent-blue: #00D4FF;
  --accent-green: #39FF14;
  --accent-purple: #8B5CF6;
  
  /* Status Colors */
  --success: #00FF88;
  --warning: #FF6B35;
  --error: #FF3B30;
  
  /* Neutral Colors */
  --white: #FFFFFF;
  --gray-100: #F8F9FA;
  --gray-200: #E9ECEF;
  --gray-300: #DEE2E6;
}
```

### Typography Scale
- **Headings**: Inter font family, weights 400-800
- **Body**: Inter font family, weights 400-600
- **Code**: JetBrains Mono, monospace

### Spacing Scale
- **Base unit**: 4px (0.25rem)
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px

## 🎭 FX-Pool Implementation

### Available Effects
1. **Matrix Effect**: Falling code characters background
2. **Parallax Scroll**: Multi-layer depth on scroll
3. **3D Tilt**: Interactive 3D card tilting
4. **Typing Animation**: Typewriter text effect
5. **Particle System**: Floating particles with Three.js
6. **Morphing Shapes**: SVG shape transformations
7. **Scroll Triggers**: Animations triggered by scroll position
8. **Ghost Cursors**: Multiple cursor simulation
9. **AI Eye Tracker**: Following eye animation
10. **Terminal Simulation**: Live terminal typing effect

### Effect Assignment Strategy
- **Random Assignment**: Each section gets 1-3 effects from pool
- **Performance Optimization**: Lazy loading for heavy effects
- **Mobile Adaptation**: Simplified effects for mobile devices
- **Accessibility**: Respect prefers-reduced-motion

## 🎮 Demo Engine Architecture

### 2.5D Office Simulation
```javascript
// Phaser 3 Configuration
const config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 800,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: [OfficeScene, UIScene]
};
```

### Work Stations
1. **Developer Desk**: Monaco Editor integration
2. **Design Bay**: Fabric.js canvas tools
3. **PM Boardroom**: Kanban board simulation
4. **Data Entry**: Form validation challenges
5. **AI Lab**: Prompt engineering tasks

### Quest System
```javascript
const questTypes = {
  coding: ['bug-fix', 'feature-implementation', 'code-review'],
  design: ['banner-creation', 'ui-mockup', 'logo-design'],
  pm: ['task-prioritization', 'timeline-creation', 'stakeholder-communication'],
  data: ['form-validation', 'data-entry', 'quality-assurance'],
  ai: ['prompt-optimization', 'model-selection', 'output-evaluation']
};
```

## 📱 Responsive Design Strategy

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large**: 1440px+

### Mobile Optimizations
- **Touch-friendly**: Minimum 44px touch targets
- **Performance**: Reduced animations and effects
- **Navigation**: Hamburger menu with smooth transitions
- **3D Fallbacks**: 2D alternatives for complex 3D scenes

## 🚀 Performance Optimization

### Code Splitting
- **Route-based**: Automatic with Next.js App Router
- **Component-based**: Dynamic imports for heavy components
- **Library-based**: Separate chunks for Three.js, GSAP, Phaser

### Asset Optimization
- **Images**: WebP format with fallbacks
- **3D Models**: Compressed GLTF/GLB files
- **Fonts**: Subset fonts, preload critical fonts
- **Icons**: SVG sprites for common icons

### Runtime Optimization
- **Lazy Loading**: Intersection Observer for components
- **Memoization**: React.memo for expensive components
- **Debouncing**: User input and scroll events
- **Web Workers**: Heavy computations off main thread

## 🔧 Development Workflow

### Package Management
```bash
# Install dependencies
npm install

# Add new packages
npm install <package-name>

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

### Key Dependencies
```json
{
  "dependencies": {
    "next": "15.3.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "gsap": "^3.12.2",
    "three": "^0.160.0",
    "phaser": "^3.70.0",
    "@monaco-editor/react": "^4.6.0",
    "fabric": "^5.3.0"
  }
}
```

### Environment Setup
```bash
# Environment variables
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 🧪 Testing Strategy

### Testing Levels
1. **Unit Tests**: Component logic testing
2. **Integration Tests**: Component interaction testing
3. **E2E Tests**: Full user journey testing
4. **Performance Tests**: Load time and animation smoothness

### Testing Tools
- **Jest**: Unit testing framework
- **React Testing Library**: Component testing
- **Playwright**: E2E testing
- **Lighthouse**: Performance auditing

## 📦 Deployment Strategy

### Build Process
1. **Static Generation**: Pre-render static pages
2. **Asset Optimization**: Compress and optimize assets
3. **Bundle Analysis**: Check bundle sizes
4. **Performance Audit**: Lighthouse scoring

### Hosting Options
- **Vercel**: Recommended for Next.js (auto-deployment)
- **Netlify**: Alternative with good performance
- **AWS S3 + CloudFront**: Custom setup for enterprise

---

*Development Guide v1.0*
*Last Updated: January 2024*
