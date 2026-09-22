import React, { useEffect, useState } from 'react';

/**
 * Custom luxury cursor that responds to interactive elements with magnetic inertia
 * and contextual editorial labels ("DISCOVER", "VIEW", "EXPLORE").
 */
export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({
    active: false,
    text: '',
    variant: 'default', // default | link | button | view | explore
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on devices with fine pointer (desktops/laptops)
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true);
    } else {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Determine hover target
      const target = e.target.closest('[data-cursor], a, button, input, select');
      if (target) {
        const customText = target.getAttribute('data-cursor-text') || '';
        const customVariant = target.getAttribute('data-cursor') || 'link';
        setCursorState({
          active: true,
          text: customText,
          variant: customVariant,
        });
      } else {
        setCursorState({
          active: false,
          text: '',
          variant: 'default',
        });
      }
    };

    const handleMouseLeave = () => {
      setCursorState(prev => ({ ...prev, active: false }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Smooth lerp trailing position for luxury fluidity
  useEffect(() => {
    if (!isVisible) return;
    let animationFrameId;

    const followCursor = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(followCursor);
    };

    animationFrameId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isVisible]);

  if (!isVisible) return null;

  const isExpanded = cursorState.active;
  const hasText = Boolean(cursorState.text);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-difference transition-opacity duration-300">
      {/* Precision Core Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-ivory-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          opacity: isExpanded && hasText ? 0 : 1,
        }}
      />

      {/* Floating Fluid Halo Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-ivory-50/80 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-[width,height,background-color,border-color] duration-300 ease-editorial ${
          hasText
            ? 'w-20 h-20 bg-ivory-50 text-charcoal-950 border-ivory-50'
            : isExpanded
            ? 'w-12 h-12 border-bronze-300 bg-ivory-50/10'
            : 'w-7 h-7 border-ivory-50/40'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        {hasText && (
          <span className="text-[9px] font-sans font-semibold tracking-widest uppercase text-charcoal-950 px-1 text-center select-none leading-tight">
            {cursorState.text}
          </span>
        )}
      </div>
    </div>
  );
}
