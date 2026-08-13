import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 3,
  className = '',
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-gradient-to-r from-[#F59E0B] via-[#ffffff] to-[#F59E0B] bg-[length:200%_100%] bg-clip-text text-transparent ${
        disabled ? '' : 'animate-shiny'
      } ${className}`}
      style={{
        animationDuration: animationDuration,
      }}
    >
      {text}
    </span>
  );
};
