import React from 'react';

export const PremiumButton = ({ children, className = "", variant = "gold", ...props }: any) => {
  const baseClass = variant === "gold" ? "gold-button" : "outline-button";
  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const PremiumInput = ({ className = "", ...props }: any) => (
  <input 
    className={`bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold/50 transition-all placeholder:text-slate-600 ${className}`} 
    {...props} 
  />
);

export const PremiumSelect = ({ children, className = "", ...props }: any) => (
  <select 
    className={`bg-white/5 border border-white/10 text-white h-14 px-4 focus:outline-none focus:border-gold/50 appearance-none cursor-pointer text-sm ${className}`} 
    {...props}
  >
    {children}
  </select>
);
