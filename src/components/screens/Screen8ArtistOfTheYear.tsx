import React, { useState } from 'react';
import { StoryData } from '../../types';
import { sound } from '../../utils/audio';

interface ScreenProps {
  data: StoryData;
}

export const Screen8ArtistOfTheYear: React.FC<ScreenProps> = ({ data }) => {
  const [isSaved, setIsSaved] = useState(true);

  const toggleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playTap();
    setIsSaved(!isSaved);
  };

  return (
    <div className="relative w-full h-full min-h-0 bg-[#131313] text-[#FEFFEF] flex flex-col justify-between overflow-y-auto overscroll-contain select-none px-5 pt-16 pb-16">
      {/* Top Header Tags */}
      <div className="pt-1">
        <div className="flex items-center justify-between mb-1.5">
          <div className="inline-flex items-center gap-1.5 bg-[#2A2A2A] px-3 py-1 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#B6F500] animate-pulse" />
            <span className="font-space text-[10px] sm:text-[11px] uppercase text-[#FEFFEF] tracking-widest font-extrabold">
              DEFINING VIBE OF {data.year}
            </span>
          </div>
          <span className="font-space text-[10px] sm:text-[11px] text-[#C3CAAD] uppercase tracking-wider font-bold">
            TRACK 07 / 09
          </span>
        </div>

        {/* Intro Teaser */}
        <p className="font-space text-[14px] sm:text-[15px] font-bold text-[#FEFFEF] uppercase tracking-tight">
          Your #1 artist this year is...
        </p>
      </div>

      {/* Center Visual Display with Geometric Sunburst Rays */}
      <div className="relative w-full aspect-square max-w-[270px] sm:max-w-[300px] mx-auto my-1 flex items-center justify-center">
        {/* Sunburst Rays SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          viewBox="0 0 340 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.95">
            <path d="M170 170L70 0H105L170 170Z" fill="#B6F500" />
            <path d="M170 170L235 0H270L170 170Z" fill="#B6F500" />
            <path d="M170 170L340 85V120L170 170Z" fill="#B6F500" />
            <path d="M170 170L340 220V255L170 170Z" fill="#B6F500" />
            <path d="M170 170L270 340H235L170 170Z" fill="#B6F500" />
            <path d="M170 170L105 340H70L170 170Z" fill="#B6F500" />
            <path d="M170 170L0 255V220L170 170Z" fill="#B6F500" />
            <path d="M170 170L0 120V85L170 170Z" fill="#B6F500" />
            <circle
              cx="170"
              cy="170"
              r="162"
              stroke="#2A2A2A"
              strokeDasharray="10 10"
              strokeWidth="4"
            />
          </g>
        </svg>

        {/* Center Lime Circle Badge */}
        <div className="relative z-10 w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-[#B6F500] flex flex-col items-center justify-center shadow-xl border-2 border-[#131313]">
          {/* Floating Mini Heart Decal */}
          <div className="absolute -top-1 right-3 bg-[#FFD7E3] text-[#BE1171] w-8 h-8 rounded-full flex items-center justify-center rotate-12 shadow-sm border border-[#131313]">
            <span className="material-symbols-outlined text-[17px] symbol-fill">favorite</span>
          </div>

          {/* Big Center Monogram */}
          <span className="font-syne text-[88px] sm:text-[98px] leading-none text-[#131313] font-black tracking-tighter select-none">
            {data.partner2Initial}
          </span>

          {/* Verification Pill Stamp */}
          <div className="absolute -bottom-2 bg-[#131313] px-3 py-0.5 rounded-full flex items-center gap-1 border border-[#B6F500] shadow-[1.5px_1.5px_0px_#131313]">
            <span className="material-symbols-outlined text-[#B6F500] text-[13px] symbol-fill">
              verified
            </span>
            <span className="font-space text-[9px] sm:text-[10px] text-[#FEFFEF] uppercase tracking-widest font-extrabold">
              VERIFIED MUSE
            </span>
          </div>
        </div>

        {/* Floating Decals */}
        <div className="absolute top-1 left-0 bg-[#2A2A2A] text-[#FEFFEF] px-2.5 py-1 rounded-[2px] -rotate-6 shadow-md border border-white/10">
          <span className="font-space text-[9px] uppercase tracking-wider font-extrabold">
            #1 ON HEAVY ROTATION
          </span>
        </div>
        <div className="absolute bottom-2 right-0 bg-[#02B04C] text-[#FEFFEF] px-2.5 py-1 rounded-[2px] rotate-6 shadow-md border border-[#131313]">
          <span className="font-space text-[9px] uppercase tracking-wider font-extrabold">
            0 SKIPS RECORDED
          </span>
        </div>
      </div>

      {/* Massive Headline Display */}
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="font-syne text-[46px] sm:text-[54px] font-black text-[#FEFFEF] tracking-tighter uppercase leading-none">
          YOU.
        </h1>
        <div className="w-16 h-1 bg-[#B6F500] my-2 rounded-full" />
        <p className="font-space text-[14px] sm:text-[15px] font-bold text-[#FEFFEF] max-w-[280px] text-center leading-snug">
          {data.partner2Initial}, my favorite person to listen to, talk to, and be with.
        </p>
      </div>

      {/* Audio Waveform Graphic */}
      <div aria-label="Audio Visualizer Peak" className="flex items-center justify-center gap-1.5 my-2 h-7">
        <span className="w-1.5 bg-[#B6F500] rounded-full h-3 animate-pulse" />
        <span className="w-1.5 bg-[#B6F500] rounded-full h-6" />
        <span className="w-1.5 bg-[#FEFFEF] rounded-full h-7" />
        <span className="w-1.5 bg-[#B6F500] rounded-full h-4" />
        <span className="w-1.5 bg-[#B6F500] rounded-full h-6" />
        <span className="w-1.5 bg-[#FEFFEF] rounded-full h-3" />
        <span className="w-1.5 bg-[#B6F500] rounded-full h-7" />
        <span className="w-1.5 bg-[#B6F500] rounded-full h-4" />
        <span className="w-1.5 bg-[#FEFFEF] rounded-full h-2.5" />
      </div>

      {/* Data Metric Strip */}
      <div className="w-full">
        <div className="w-full bg-[#2A2A2A] rounded-full p-1.5 flex items-center justify-between border border-white/10 shadow-sm">
          <div className="flex items-center gap-2 pl-2 min-w-0">
            <span className="material-symbols-outlined text-[#B6F500] text-[18px] shrink-0 symbol-fill">
              stars
            </span>
            <span className="font-space text-[10px] sm:text-[11px] text-[#FEFFEF] truncate tracking-wide uppercase font-bold">
              In your top 0.001% of worldwide fans
            </span>
          </div>
          <div className="shrink-0 bg-[#FFD7E3] text-[#BE1171] px-2.5 py-0.5 rounded-full flex items-center justify-center border border-[#131313]">
            <span className="font-space text-[10px] uppercase tracking-wider font-black">VIP</span>
          </div>
        </div>
      </div>

      {/* Interactive Favorite Trigger */}
      <div className="mt-2 mb-1 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={toggleSave}
          className="inline-flex items-center gap-2 bg-[#201F1F] hover:bg-[#2A2A2A] active:scale-95 transition-transform text-[#FEFFEF] px-4 py-1.5 rounded-full border border-white/15 shadow-sm"
        >
          <span
            className={`material-symbols-outlined text-[17px] ${
              isSaved ? 'text-[#B6F500] symbol-fill' : 'text-[#C3CAAD]'
            }`}
          >
            favorite
          </span>
          <span className="font-space text-[11px] uppercase tracking-wider font-extrabold">
            {isSaved ? 'Saved to Soul Library' : 'Add to Favorites'}
          </span>
        </button>
      </div>
    </div>
  );
};
