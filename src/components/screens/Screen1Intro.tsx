import React from 'react';
import { StoryData } from '../../types';
import { sound } from '../../utils/audio';

interface ScreenProps {
  data: StoryData;
  onNext: () => void;
}

export const Screen1Intro: React.FC<ScreenProps> = ({ data, onNext }) => {
  return (
    <div className="relative w-full h-full min-h-0 bg-[#B6F500] text-[#131313] flex flex-col justify-between overflow-y-auto overscroll-contain select-none px-5 pt-16 pb-16">
      {/* Dynamic Diagonal Graphic Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              height="28"
              id="brutalist-stripes-intro"
              patternTransform="rotate(45 0 0)"
              patternUnits="userSpaceOnUse"
              width="28"
            >
              <line stroke="#131313" strokeWidth="10" x1="0" x2="0" y1="0" y2="28" />
            </pattern>
          </defs>
          <rect fill="url(#brutalist-stripes-intro)" height="100%" width="100%" />
        </svg>
      </div>

      {/* Top Block: Oversized Graphic Typography */}
      <div className="relative z-10 w-full pt-1">
        {/* Decal Sticker Tag */}
        <div className="inline-flex items-center gap-1.5 bg-[#131313] text-[#FEFFEF] px-2.5 py-1 rounded-[2px] -rotate-2 mb-3 shadow-[3px_3px_0px_#131313]">
          <span className="material-symbols-outlined text-[15px] text-[#B6F500] symbol-fill">
            bolt
          </span>
          <span className="font-space text-[10px] sm:text-[11px] uppercase tracking-widest font-bold">
            EDITION · PRIVATE DROP
          </span>
        </div>

        {/* Giant Stacked 2026 Typography */}
        <div className="relative leading-none">
          <h1 className="font-syne text-[56px] sm:text-[68px] font-extrabold text-[#131313] tracking-tighter uppercase translate-x-3">
            20
          </h1>
          <h1 className="font-syne text-[56px] sm:text-[68px] font-extrabold text-[#131313] tracking-tighter uppercase translate-x-12 -mt-4 opacity-95">
            26
          </h1>

          {/* Pop Brutalist Decorative Asterisk Stamp */}
          <div className="absolute -top-1 right-2 w-12 h-12 bg-[#02B04C] text-[#003A14] flex items-center justify-center rounded-[3px] rotate-12 shadow-[3px_3px_0px_#131313]">
            <span className="material-symbols-outlined text-[28px] text-white symbol-fill">
              auto_awesome
            </span>
          </div>
        </div>
      </div>

      {/* Center Stage: Banner Badge & Subtitles */}
      <div className="relative z-10 flex flex-col items-center text-center my-auto py-2 w-full">
        {/* Main Stark White Poster Badge */}
        <div className="w-full bg-[#FEFFEF] text-[#131313] px-4 py-5 rounded-[3px] -rotate-[1.5deg] shadow-[5px_5px_0px_#131313] transition-transform active:translate-x-0.5 active:translate-y-0.5 border-[1.5px] border-[#131313]">
          <span className="font-space text-[11px] uppercase tracking-wider text-[#636652] block mb-1 font-bold">
            A RETROSPECTIVE FOR {data.partner2Name.toUpperCase()}
          </span>
          <h2 className="font-syne text-[28px] sm:text-[32px] uppercase tracking-tight text-[#131313] font-extrabold leading-tight">
            {data.partner2Name.toUpperCase()}'S WRAPPED
            <br />
            IS HERE.
          </h2>
        </div>

        {/* Editorial Byline Subtext */}
        <div className="mt-3 bg-[#131313] text-[#E5E2E1] px-4 py-1.5 rounded-[3px] shadow-[2px_2px_0px_#131313] border border-[#131313]">
          <p className="font-space text-[14px] sm:text-[15px] font-bold tracking-tight">
            Made by {data.partner1Initial}. Only for you.
          </p>
        </div>

        {/* Playful Audio Metric Pill */}
        <div className="mt-3 flex items-center gap-1.5 text-[#131313] font-space font-semibold text-[11px] sm:text-[12px] uppercase tracking-wider">
          <span className="material-symbols-outlined text-[17px] symbol-fill">graphic_eq</span>
          <span>PERMANENT TOP TRACK . TOP 0.01% SOULMATE</span>
        </div>
      </div>

      {/* Bottom Stage: Interactive Button & Avatar Accents */}
      <div className="relative z-10 flex flex-col items-center w-full gap-4 mt-auto">
        {/* Chunky Pill CTA Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            sound.playTap();
            onNext();
          }}
          className="w-full bg-[#131313] text-[#FEFFEF] hover:bg-[#201F1F] active:translate-x-1 active:translate-y-1 transition-all py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-[4px_4px_0px_#131313] group cursor-pointer border border-[#131313]"
        >
          <span className="font-space text-[15px] uppercase tracking-wider font-bold">
            Tap to begin
          </span>
          <span className="material-symbols-outlined text-[20px] text-[#B6F500] group-hover:translate-x-1 transition-transform font-bold">
            arrow_forward
          </span>
        </button>

        {/* Bottom Overlapping Monogram Decal Spheres */}
        <div className="relative w-full h-16 flex items-end justify-center overflow-visible pointer-events-none">
          {/* V Decal (Lavender Container) */}
          <div className="w-20 h-20 rounded-full bg-[#FFD7E3] text-[#BE1171] border-[1.5px] border-[#131313] flex items-center justify-center absolute -left-1 -bottom-4 -rotate-[8deg] shadow-[3px_3px_0px_#131313]">
            <span className="font-syne text-[36px] font-black text-[#BE1171]">
              {data.partner1Initial}
            </span>
          </div>

          {/* Mini Connector Pill */}
          <div className="z-20 bg-[#131313] text-[#B6F500] px-2.5 py-0.5 rounded-full shadow-[2px_2px_0px_#131313] text-center -translate-y-2 border border-[#131313]">
            <span className="font-space text-[11px] font-extrabold tracking-widest">+</span>
          </div>

          {/* P Decal (Green Secondary Container) */}
          <div className="w-20 h-20 rounded-full bg-[#02B04C] text-[#003A14] border-[1.5px] border-[#131313] flex items-center justify-center absolute -right-1 -bottom-4 rotate-[8deg] shadow-[3px_3px_0px_#131313]">
            <span className="font-syne text-[36px] font-black text-white">
              {data.partner2Initial}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
