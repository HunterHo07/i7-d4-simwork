// App Constants
export const APP_NAME = 'SimWork';
export const APP_TAGLINE = 'Prove your skills. Play your job.';
export const APP_DESCRIPTION = 'An immersive, AI-powered 2.5D simulation platform that replicates the future of work.';

// Colors
export const COLORS = {
  primary: {
    900: '#0A0E27',
    800: '#1A1F3A',
    700: '#2A2D3A',
    600: '#3A3F4A',
    500: '#4A4F5A',
  },
  accent: {
    blue: '#00D4FF',
    green: '#39FF14',
    purple: '#8B5CF6',
  },
  status: {
    success: '#00FF88',
    warning: '#FF6B35',
    error: '#FF3B30',
  }
};

// Breakpoints
export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  large: '1440px',
};

// Animation Durations
export const DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
};

// FX Pool - Available effects for sections
export const FX_POOL = [
  'matrix-effect',
  'parallax-scroll',
  '3d-tilt',
  'typing-animation',
  'particle-system',
  'morphing-shapes',
  'scroll-triggers',
  'ghost-cursors',
  'ai-eye-tracker',
  'terminal-simulation',
  'floating-tooltips',
  'infinite-zoom',
  'mini-demo-animation',
  'multi-layer-parallax',
  'audio-responsive',
  'carousel-3d',
  'hover-animations',
  'loading-screens',
];

// Work Stations
export const WORK_STATIONS = {
  developer: {
    id: 'developer',
    name: 'Developer Desk',
    description: 'Code, debug, and build applications',
    tools: ['Monaco Editor', 'Terminal', 'Git Simulator'],
    color: COLORS.accent.blue,
  },
  designer: {
    id: 'designer',
    name: 'Design Bay',
    description: 'Create stunning visual designs',
    tools: ['Canvas Editor', 'Color Picker', 'Asset Library'],
    color: COLORS.accent.purple,
  },
  pm: {
    id: 'pm',
    name: 'PM Boardroom',
    description: 'Manage projects and coordinate teams',
    tools: ['Kanban Board', 'Timeline', 'Communication Hub'],
    color: COLORS.accent.green,
  },
  data: {
    id: 'data',
    name: 'Data Entry Station',
    description: 'Process and validate data efficiently',
    tools: ['Form Builder', 'Validator', 'Analytics Dashboard'],
    color: COLORS.status.warning,
  },
  ai: {
    id: 'ai',
    name: 'AI Prompt Lab',
    description: 'Engineer prompts and train models',
    tools: ['Prompt Editor', 'Model Tester', 'Output Analyzer'],
    color: COLORS.status.success,
  },
};

// Quest Types
export const QUEST_TYPES = {
  coding: {
    name: 'Coding Challenges',
    difficulty: ['beginner', 'intermediate', 'advanced'],
    tasks: ['bug-fix', 'feature-implementation', 'code-review', 'optimization'],
  },
  design: {
    name: 'Design Tasks',
    difficulty: ['beginner', 'intermediate', 'advanced'],
    tasks: ['banner-creation', 'ui-mockup', 'logo-design', 'user-flow'],
  },
  pm: {
    name: 'Project Management',
    difficulty: ['beginner', 'intermediate', 'advanced'],
    tasks: ['task-prioritization', 'timeline-creation', 'stakeholder-communication', 'risk-assessment'],
  },
  data: {
    name: 'Data Processing',
    difficulty: ['beginner', 'intermediate', 'advanced'],
    tasks: ['form-validation', 'data-entry', 'quality-assurance', 'report-generation'],
  },
  ai: {
    name: 'AI Engineering',
    difficulty: ['beginner', 'intermediate', 'advanced'],
    tasks: ['prompt-optimization', 'model-selection', 'output-evaluation', 'fine-tuning'],
  },
};

// User Levels and XP
export const USER_LEVELS = {
  1: { name: 'Intern', xp: 0, color: '#4A4F5A' },
  2: { name: 'Junior', xp: 100, color: '#00D4FF' },
  3: { name: 'Mid-Level', xp: 300, color: '#8B5CF6' },
  4: { name: 'Senior', xp: 600, color: '#39FF14' },
  5: { name: 'Lead', xp: 1000, color: '#FF6B35' },
  6: { name: 'Expert', xp: 1500, color: '#00FF88' },
  7: { name: 'Master', xp: 2500, color: '#FF3B30' },
};

// Pricing Plans
export const PRICING_PLANS = {
  free: {
    name: 'Free Explorer',
    price: 0,
    period: 'forever',
    features: [
      'Explore 2.5D office world',
      'Complete basic tasks',
      'Personal profile',
      'Community access',
      'Basic quest completion',
    ],
    limitations: [
      'Limited to 5 quests per day',
      'Basic profile features only',
      'No advanced analytics',
    ],
  },
  pro: {
    name: 'Pro Talent',
    price: 199,
    period: 'month',
    features: [
      'Unlimited quest access',
      'Advanced profile features',
      'Recruiter dashboard access',
      'Custom quest creation',
      'Analytics and insights',
      'Freelancer discovery',
      'Priority support',
    ],
    popular: true,
  },
  enterprise: {
    name: 'Enterprise',
    price: 599,
    period: 'month',
    features: [
      'Everything in Pro',
      'Custom simulations',
      'API access',
      'Branded workspaces',
      'Advanced integrations',
      'Dedicated support',
      'Custom training programs',
    ],
  },
};

// Navigation Links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/demo', label: 'Demo' },
  { href: '/pitch', label: 'Pitch Deck' },
  { href: '/why-us', label: 'Why Us' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/signup', label: 'Sign Up' },
];

// Social Links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/simwork',
  linkedin: 'https://linkedin.com/company/simwork',
  github: 'https://github.com/simwork',
  discord: 'https://discord.gg/simwork',
};

// API Endpoints (simulated)
export const API_ENDPOINTS = {
  quests: '/api/quests',
  users: '/api/users',
  leaderboard: '/api/leaderboard',
  analytics: '/api/analytics',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  user: 'simwork_user',
  progress: 'simwork_progress',
  settings: 'simwork_settings',
  quests: 'simwork_quests',
};

// Default User Data
export const DEFAULT_USER = {
  id: null,
  name: '',
  email: '',
  avatar: '',
  level: 1,
  xp: 0,
  completedQuests: [],
  badges: [],
  skills: {},
  preferences: {
    theme: 'dark',
    animations: true,
    sound: true,
  },
  createdAt: null,
  lastActive: null,
};

export default {
  APP_NAME,
  APP_TAGLINE,
  APP_DESCRIPTION,
  COLORS,
  BREAKPOINTS,
  DURATIONS,
  FX_POOL,
  WORK_STATIONS,
  QUEST_TYPES,
  USER_LEVELS,
  PRICING_PLANS,
  NAV_LINKS,
  SOCIAL_LINKS,
  API_ENDPOINTS,
  STORAGE_KEYS,
  DEFAULT_USER,
};
