import React from 'react';

interface FoundationDividerProps {
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export const FoundationDivider: React.FC<FoundationDividerProps> = ({
  className = '',
  align = 'center',
}) => {
  const alignmentClass =
    align === 'left' ? 'items-start' : align === 'right' ? 'items-end' : 'items-center';

  return (
    <div className={`py-6 flex flex-col ${alignmentClass} space-y-1.5 ${className}`}>
      {/* Layer 1: Base wide bar */}
      <div className="h-1 w-24 sm:w-32 rounded-full bg-gradient-to-r from-[#011B4C] via-[#011B4C]/80 to-[#FBAD00]" />
      {/* Layer 2: Middle bar */}
      <div className="h-0.5 w-16 sm:w-20 rounded-full bg-gradient-to-r from-[#011B4C] to-[#FBAD00]/80" />
      {/* Layer 3: Top accent bar */}
      <div className="h-0.5 w-8 sm:w-10 rounded-full bg-[#FBAD00]" />
    </div>
  );
};
