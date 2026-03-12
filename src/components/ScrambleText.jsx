import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrambleText({ text, className, delay = 0 }) {
  const elRef = useRef(null);
  const chars = '0123456789ABCDEF!@#$*{}[]';

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: elRef.current,
        start: 'top 90%',
        onEnter: () => {
          if (delay > 0) {
            setTimeout(() => {
              if (elRef.current) scramble(elRef.current, text);
            }, delay * 1000);
          } else {
            scramble(elRef.current, text);
          }
        },
        once: true
      });
    }, elRef);
    return () => ctx.revert();
  }, [text, delay]);

  const scramble = (element, finalString) => {
    let frame = 0;
    const length = finalString.length;
    // We animate over ~40 frames
    const loop = () => {
      if (!element) return;
      frame++;
      let currentString = '';
      let progress = frame / 40; // 0 to 1
      
      for (let i = 0; i < length; i++) {
        // If the character's turn has come, show the real character
        if (i < length * progress) {
          currentString += finalString[i];
        } else if (finalString[i] === ' ') {
          currentString += ' ';
        } else {
          // Otherwise, show a random character
          currentString += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      
      element.innerText = currentString;
      
      if (frame < 40) {
        requestAnimationFrame(loop);
      } else {
        element.innerText = finalString;
      }
    };
    
    requestAnimationFrame(loop);
  };

  return (
    <span ref={elRef} className={className} style={{ display: 'inline-block' }}>
      {text.split('').map(c => c === ' ' ? ' ' : '_').join('') /* Preserve spaces for wrapping */}
    </span>
  );
}
