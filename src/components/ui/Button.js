'use client';

import { cn } from '@/lib/utils';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-accent-blue text-primary-900 hover:bg-accent-green hover:shadow-lg hover:shadow-accent-blue/25 focus:ring-accent-blue',
    secondary: 'bg-primary-700 text-white border border-primary-600 hover:bg-primary-600 hover:border-accent-blue focus:ring-accent-blue',
    outline: 'bg-transparent text-accent-blue border border-accent-blue hover:bg-accent-blue hover:text-primary-900 focus:ring-accent-blue',
    ghost: 'bg-transparent text-white hover:bg-primary-700 hover:text-accent-blue focus:ring-accent-blue',
    danger: 'bg-status-error text-white hover:bg-red-600 hover:shadow-lg hover:shadow-status-error/25 focus:ring-status-error',
    success: 'bg-status-success text-primary-900 hover:bg-green-400 hover:shadow-lg hover:shadow-status-success/25 focus:ring-status-success',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl',
    xl: 'px-8 py-4 text-xl rounded-2xl',
  };
  
  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    loading && 'cursor-wait',
    className
  );
  
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
