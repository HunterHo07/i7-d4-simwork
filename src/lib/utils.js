import { STORAGE_KEYS, DEFAULT_USER, USER_LEVELS } from './constants';

// Utility function to combine class names
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Local Storage utilities
export const storage = {
  get: (key) => {
    if (typeof window === 'undefined') return null;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  },
  
  set: (key, value) => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  },
  
  remove: (key) => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  },
  
  clear: () => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
};

// User utilities
export const userUtils = {
  create: (userData) => {
    const user = {
      ...DEFAULT_USER,
      ...userData,
      id: generateId(),
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
    };
    storage.set(STORAGE_KEYS.user, user);
    return user;
  },
  
  get: () => {
    return storage.get(STORAGE_KEYS.user) || null;
  },
  
  update: (updates) => {
    const user = userUtils.get();
    if (!user) return null;
    
    const updatedUser = {
      ...user,
      ...updates,
      lastActive: new Date().toISOString(),
    };
    
    storage.set(STORAGE_KEYS.user, updatedUser);
    return updatedUser;
  },
  
  addXP: (amount) => {
    const user = userUtils.get();
    if (!user) return null;
    
    const newXP = user.xp + amount;
    const newLevel = calculateLevel(newXP);
    
    return userUtils.update({
      xp: newXP,
      level: newLevel,
    });
  },
  
  completeQuest: (questId, xpReward) => {
    const user = userUtils.get();
    if (!user) return null;
    
    const completedQuests = [...user.completedQuests, questId];
    const newXP = user.xp + xpReward;
    const newLevel = calculateLevel(newXP);
    
    return userUtils.update({
      xp: newXP,
      level: newLevel,
      completedQuests,
    });
  },
  
  delete: () => {
    storage.remove(STORAGE_KEYS.user);
    storage.remove(STORAGE_KEYS.progress);
  }
};

// XP and Level calculations
export function calculateLevel(xp) {
  const levels = Object.entries(USER_LEVELS).reverse();
  for (const [level, data] of levels) {
    if (xp >= data.xp) {
      return parseInt(level);
    }
  }
  return 1;
}

export function getXPForNextLevel(currentLevel) {
  const nextLevel = currentLevel + 1;
  return USER_LEVELS[nextLevel]?.xp || USER_LEVELS[Object.keys(USER_LEVELS).pop()].xp;
}

export function getProgressToNextLevel(xp, level) {
  const currentLevelXP = USER_LEVELS[level].xp;
  const nextLevelXP = getXPForNextLevel(level);
  const progress = ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
  return Math.min(Math.max(progress, 0), 100);
}

// ID generation
export function generateId() {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

// Date utilities
export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatDateTime(date) {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function timeAgo(date) {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now - past) / 1000);
  
  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)}mo ago`;
  return `${Math.floor(diffInSeconds / 31536000)}y ago`;
}

// Number utilities
export function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

// Random utilities
export function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Animation utilities
export function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

export function easeIn(t) {
  return t * t * t;
}

// Device detection
export function isMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

export function isTablet() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= 768 && window.innerWidth < 1024;
}

export function isDesktop() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= 1024;
}

// Performance utilities
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Color utilities
export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Validation utilities
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Export all utilities
export default {
  cn,
  storage,
  userUtils,
  calculateLevel,
  getXPForNextLevel,
  getProgressToNextLevel,
  generateId,
  formatDate,
  formatDateTime,
  timeAgo,
  formatNumber,
  clamp,
  lerp,
  randomBetween,
  randomChoice,
  shuffle,
  easeInOut,
  easeOut,
  easeIn,
  isMobile,
  isTablet,
  isDesktop,
  debounce,
  throttle,
  hexToRgb,
  rgbToHex,
  isValidEmail,
  isValidUrl,
};
