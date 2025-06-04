'use client';

import { cn } from '@/lib/utils';

const Card = ({
  children,
  className = '',
  variant = 'default',
  hover = false,
  glow = false,
  ...props
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const variants = {
    default: 'bg-primary-800/50 border border-primary-700 backdrop-blur-sm',
    glass: 'bg-white/5 border border-white/10 backdrop-blur-md',
    solid: 'bg-primary-800 border border-primary-700',
    gradient: 'bg-gradient-to-br from-primary-800 to-primary-700 border border-primary-600',
    neon: 'bg-primary-900 border border-accent-blue shadow-lg shadow-accent-blue/20',
  };
  
  const hoverEffects = hover ? 'hover:scale-105 hover:shadow-xl hover:shadow-accent-blue/10 cursor-pointer' : '';
  const glowEffect = glow ? 'shadow-lg shadow-accent-blue/25 animate-glow' : '';
  
  const classes = cn(
    baseClasses,
    variants[variant],
    hoverEffects,
    glowEffect,
    className
  );
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={cn('p-6 pb-0', className)} {...props}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className = '', ...props }) => {
  return (
    <h3 className={cn('text-xl font-semibold text-white mb-2', className)} {...props}>
      {children}
    </h3>
  );
};

const CardDescription = ({ children, className = '', ...props }) => {
  return (
    <p className={cn('text-gray-300 text-sm', className)} {...props}>
      {children}
    </p>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Description = CardDescription;

export default Card;
