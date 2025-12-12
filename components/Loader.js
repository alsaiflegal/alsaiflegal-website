'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
/**
 * Full-screen loading animation component
 * Animation sequence:
 * 1. Logo fades in (0% to 100%)
 * 2. Logo pops (scales up slightly)
 * 3. Logo becomes a mask revealing page content
 * 4. Logo grows to fill screen, revealing full page
 * 5. Loader fades out and unmounts
 */
export default function Loader({ onComplete }) {
  const [animationStage, setAnimationStage] = useState('fade-in'); // fade-in -> pop -> reveal -> complete
  useEffect(() => {
    // Stage 1: Fade in (0-1s)
    const fadeInTimer = setTimeout(() => {
      setAnimationStage('pop');
    }, 1000);
    // Stage 2: Pop animation (1-1.5s)
    const popTimer = setTimeout(() => {
      setAnimationStage('reveal');
    }, 1500);
    // Stage 3: Mask reveal and grow (1.5-3.5s)
    const revealTimer = setTimeout(() => {
      setAnimationStage('complete');
    }, 3500);
    // Stage 4: Fade out and unmount (3.5-4s)
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4000);
    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(popTimer);
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);
  // Don't render if animation is complete
  if (animationStage === 'complete') {
    return null;
  }
  return (
    <>
      {/* Loader container with dark navy background */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0A2342] transition-opacity duration-500 ${
          animationStage === 'complete' ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          pointerEvents: animationStage === 'complete' ? 'none' : 'auto',
        }}
      >
        {/* Logo container with animations */}
        <div
          className={`relative transition-all duration-1000 ease-out ${
            // Stage 1: Fade in
            animationStage === 'fade-in'
              ? 'opacity-0 scale-100'
              : // Stage 2: Pop (fade complete + scale up)
              animationStage === 'pop'
              ? 'opacity-100 scale-110'
              : // Stage 3: Reveal (scale to fill screen)
              animationStage === 'reveal'
              ? 'opacity-100 scale-[20]'
              : // Stage 4: Complete
                'opacity-0 scale-[20]'
          }`}
          style={{
            transitionTimingFunction:
              animationStage === 'reveal'
                ? 'cubic-bezier(0.4, 0, 0.2, 1)'
                : 'ease-out',
            transitionDuration:
              animationStage === 'fade-in'
                ? '1000ms'
                : animationStage === 'pop'
                ? '500ms'
                : animationStage === 'reveal'
                ? '2000ms'
                : '500ms',
          }}
        >
          {/* Logo placeholder - Replace with your actual logo */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
            
            {/* Alternative: Use actual image */}
            <Image
              src="/images/logos/logo.png"
              alt="Logo"
              fill
              className="object-contain p-4"
              priority
            /> 
          </div>
        </div>
        {/* Circular mask overlay for reveal effect */}
        {animationStage === 'reveal' && (
          <div
            className="fixed inset-0 bg-[#0A2342] transition-all duration-2000 ease-out"
            style={{
              clipPath: 'circle(150% at 50% 50%)',
              animation: 'expandMask 2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            }}
          />
        )}
      </div>
      {/* Tailwind CSS custom animations */}
      <style jsx>{`
        @keyframes expandMask {
          from {
            clip-path: circle(0% at 50% 50%);
          }
          to {
            clip-path: circle(150% at 50% 50%);
          }
        }
      `}</style>
    </>
  );
}
