import React from 'react';
import { Share2 } from 'lucide-react';

interface StoryFooterProps {
  partner1Initial: string;
  partner2Initial: string;
  onShare: () => void;
}

export const StoryFooter: React.FC<StoryFooterProps> = ({
  partner1Initial,
  partner2Initial,
  onShare,
}) => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-40 h-14 px-4 flex items-center justify-between bg-gradient-to-t from-[#131313]/90 via-[#131313]/50 to-transparent backdrop-blur-[2px] select-none pointer-events-auto">
      {/* Left: Our Wrapped branding badge */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-[#B6F500] flex items-center justify-center shadow-sm">
          <span className="material-symbols-outlined text-[#131313] text-[14px] symbol-fill">
            favorite
          </span>
        </div>
        <span className="font-space font-bold text-[11px] uppercase tracking-widest text-[#E5E2E1]">
          OUR WRAPPED
        </span>
      </div>

      {/* Right: Partner initials & Share button */}
      <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
        <span className="font-space font-extrabold text-[12px] uppercase tracking-widest text-[#B6F500]">
          {partner1Initial} + {partner2Initial}
        </span>
        <button
          onClick={onShare}
          aria-label="Share slide"
          className="w-8 h-8 rounded-full bg-black/40 border border-white/20 text-white/90 hover:text-[#B6F500] hover:border-[#B6F500] flex items-center justify-center transition-colors shadow-sm"
          title="Share this card"
        >
          <Share2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
