'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className = '', 
    children, 
    variant = 'primary', 
    size = 'md',
    loading = false,
    icon,
    ...props 
  }, ref) => {
    const variants = {
      primary: 'bg-[#002e88] hover:bg-[#007BFF] text-white',
      secondary: 'bg-[#00e5e5] hover:bg-[#00e5e5]/90 text-[#002e88]',
      outline: 'bg-transparent border-2 border-[#002e88] text-[#002e88] hover:bg-[#002e88] hover:text-white'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    return (
      <button
        ref={ref}
        className={cn(
          'relative font-semibold rounded-lg transition-all duration-300',
          'hover:scale-[1.02] active:scale-[0.98]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <div className="relative z-10 flex items-center justify-center gap-2">
          {loading ? (
            <svg 
              className="animate-spin h-5 w-5" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
                fill="none"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : icon}
          {children}
        </div>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };