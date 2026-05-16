'use client';

import React, { ElementType, ReactNode, useEffect, useRef, useState } from 'react';

type ScrollRevealProps<T extends ElementType = 'div'> = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: T;
};

export default function ScrollReveal<T extends ElementType = 'div'>({
  children,
  className = '',
  delay = 0,
  as
}: ScrollRevealProps<T>) {
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef<HTMLElement | null>(null);
  const Component = (as ?? 'div') as ElementType;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const node = nodeRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={(el: HTMLElement | null) => {
        nodeRef.current = el;
      }}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-700 ease-out will-change-transform ${
        isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-6 opacity-0 blur-[2px]'
      } ${className}`}
    >
      {children}
    </Component>
  );
}
