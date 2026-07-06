import React from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';

interface TypewriterProps {
  words: string[];
}

export const Typewriter: React.FC<TypewriterProps> = ({ words }) => {
  const text = useTypewriter(words);

  return (
    <span className="inline-block min-h-[1.2em]">
      {text}
      <span className="inline-block animate-blink w-1 h-[1em] bg-secondary ml-1 align-middle -translate-y-[0.1em]"></span>
    </span>
  );
};
