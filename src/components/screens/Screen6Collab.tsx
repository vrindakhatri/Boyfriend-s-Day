import React from 'react';
import { StoryData } from '../../types';

interface ScreenProps {
  data: StoryData;
}

export const Screen6Collab: React.FC<ScreenProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full min-h-0 bg-[#131313] text-[#FEFFEF] flex flex-col justify-between overflow-y-auto overscroll-contain select-none pt-16 pb-16">
      {/* Top Banner Canopy */}
      <div className="relative w-full overflow-hidden bg-[#FEFFEF] px-5 pt-3 pb-4 flex flex-col justify-between border-b-2 border-[#131313]">
        {/* Geometric Diagonal Rays Graphic */}
        <div className="absolute -top-6 -right-6 w-44 h-44 pointer-events-none opacity-90 text-[#0E0E0E]">
          <svg className="w-full h-full" fill="none" viewBox="0 0 100 100">
            <polygon fill="currentColor" points="100,0 60,0 100,40" />
            <polygon fill="currentColor" points="100,55 35,0 15,0 100,85" />
            <polygon fill="currentColor" points="100,100 0,0 0,20 80,100" />
            <polygon fill="currentColor" points="0,40 0,60 60,100 40,100" />
          </svg>
        </div>

        {/* Cropped Giant Pop Year Stamp */}
        <div className="relative z-10 w-full flex items-baseline justify-between">
          <div className="flex flex-col -ml-1 -mt-2">
            <span className="font-syne text-[52px] sm:text-[62px] text-[#B6F500] font-extrabold tracking-tighter leading-none select-none drop-shadow-[2px_2px_0px_#131313]">
              {data.year}
            </span>
            <div className="h-1.5 w-24 bg-[#0E0E0E] mt-1" />
          </div>

          {/* Top Pill Sticker Decal */}
          <div className="rotate-3 translate-y-1">
            <span className="bg-[#FFD7E3] text-[#BE1171] font-space text-[10px] sm:text-[11px] font-extrabold px-2.5 py-1 uppercase shadow-[2px_2px_0px_#0E0E0E] border border-[#131313]">
              COLLAB EDITION
            </span>
          </div>
        </div>

        {/* Center Badge: Couple's Party */}
        <div className="relative z-10 mt-3 self-start">
          <div className="bg-[#0E0E0E] text-[#FEFFEF] px-3.5 py-1.5 inline-flex items-center gap-1.5 shadow-[3px_3px_0px_#B6F500] -rotate-1 border border-[#0E0E0E]">
            <span className="material-symbols-outlined text-[16px] text-[#B6F500] symbol-fill">
              celebration
            </span>
            <h1 className="font-space text-[15px] font-bold uppercase tracking-wider text-[#FEFFEF]">
              {data.partner1Initial} &amp; {data.partner2Initial}'S PARTY
            </h1>
          </div>
        </div>
      </div>

      {/* Hero Collaboration Avatars Section */}
      <div className="px-5 pt-3 pb-2 flex flex-col items-center justify-center relative">
        <div className="relative flex items-center justify-center py-2">
          {/* Left Circle: Lavender / V */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#B49BC8] border-2 border-[#0E0E0E] flex items-center justify-center relative z-10 shadow-[3px_3px_0px_#0E0E0E]">
            <span className="font-syne text-[40px] sm:text-[46px] font-extrabold text-[#FEFFEF]">
              {data.partner1Initial}
            </span>
            <span className="absolute -bottom-2 bg-[#0E0E0E] text-[#FEFFEF] font-space text-[9px] px-2 py-0.5 uppercase tracking-widest font-extrabold rounded-sm border border-white/20">
              {data.partner1Name.toUpperCase()}
            </span>
          </div>

          {/* Right Circle: Electric Blue / P (Overlapping) */}
          <div className="-ml-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#4D9BFF] border-2 border-[#0E0E0E] flex items-center justify-center relative z-20 shadow-[3px_3px_0px_#0E0E0E]">
            <span className="font-syne text-[40px] sm:text-[46px] font-extrabold text-[#FEFFEF]">
              {data.partner2Initial}
            </span>
            <span className="absolute -top-2 bg-[#0E0E0E] text-[#FEFFEF] font-space text-[9px] px-2 py-0.5 uppercase tracking-widest font-extrabold rounded-sm border border-white/20">
              {data.partner2Name.toUpperCase()}
            </span>
          </div>

          {/* Overlap Badge: Mini Red Heart Pop Sticker */}
          <div className="absolute z-30 flex items-center justify-center w-9 h-9 rounded-full bg-[#FF4FA3] text-white border-2 border-[#0E0E0E] shadow-[2px_2px_0px_#0E0E0E] animate-bounce">
            <span className="material-symbols-outlined text-[18px] symbol-fill">favorite</span>
          </div>
        </div>

        {/* Sonic Blend Indicator Bar */}
        <div className="mt-3 w-full flex items-center justify-center gap-1.5">
          <div className="h-1.5 flex-1 bg-[#B49BC8] rounded-full" />
          <div className="h-3 w-3 bg-[#B6F500] rounded-full border border-black" />
          <div className="h-1.5 flex-1 bg-[#4D9BFF] rounded-full" />
        </div>
      </div>

      {/* Brutalist Stacked Stat Modules */}
      <div className="px-5 flex flex-col gap-2.5 w-full">
        {/* Stat 1: Total Minutes */}
        <div className="w-full bg-[#201F1F] p-3.5 flex flex-col justify-between shadow-[3px_3px_0px_#0E0E0E] border border-white/10 rounded-[3px]">
          <div className="flex items-center justify-between mb-1">
            <span className="font-space text-[10px] uppercase tracking-widest text-[#C3CAAD] font-bold">
              TOTAL MINUTES TOGETHER
            </span>
            <span className="font-space text-[10px] text-[#B6F500] font-bold">01 / TIME</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-syne text-[36px] sm:text-[42px] text-[#FEFFEF] font-extrabold tracking-tight">
              {data.minutesTogether}
            </span>
            <span className="font-space text-[12px] text-[#53E076] uppercase font-extrabold tracking-wider bg-[#0E0E0E] px-2 py-0.5 border border-[#53E076]">
              NON-STOP
            </span>
          </div>
        </div>

        {/* Stat 2: Group Award */}
        <div className="w-full bg-[#B6F500] p-3.5 text-[#131313] shadow-[3px_3px_0px_#0E0E0E] border border-[#131313] rounded-[3px]">
          <div className="flex items-center justify-between mb-1">
            <span className="font-space text-[10px] uppercase tracking-widest text-[#131313] font-black">
              GROUP AWARD
            </span>
            <span className="material-symbols-outlined text-[17px] symbol-fill text-[#131313]">
              verified
            </span>
          </div>
          <h2 className="font-syne text-[22px] sm:text-[24px] text-[#131313] font-black tracking-tight leading-tight">
            THE PERSONAL FAVORITE
          </h2>
          <p className="font-space text-[12px] sm:text-[13px] text-[#131313] mt-1 font-semibold leading-snug">
            Caused approximately 94% of my smiling.
          </p>
        </div>

        {/* Stat 3: Our Compatibility */}
        <div className="w-full bg-[#2A2A2A] p-3 flex flex-col shadow-[3px_3px_0px_#0E0E0E] border border-white/10 rounded-[3px]">
          <div className="flex items-center justify-between mb-1">
            <span className="font-space text-[10px] uppercase tracking-widest text-[#C3CAAD] font-bold">
              OUR COMPATIBILITY
            </span>
            <span className="font-space text-[10px] text-[#53E076] font-bold">AUDIO VIBE</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-syne text-[22px] text-[#FEFFEF] font-bold tracking-tight">
              100% Match
            </span>
            <span className="font-space text-[12px] text-[#C3CAAD]">(obviously)</span>
          </div>

          {/* Chunky Waveform Visualizer */}
          <div className="flex items-end gap-1 h-5 mt-2">
            <div className="w-2 h-2.5 bg-[#53E076]" />
            <div className="w-2 h-4 bg-[#B6F500]" />
            <div className="w-2 h-5 bg-[#53E076]" />
            <div className="w-2 h-3 bg-[#FEFFEF]" />
            <div className="w-2 h-5 bg-[#B6F500]" />
            <div className="w-2 h-4 bg-[#53E076]" />
            <div className="w-2 h-2 bg-[#53E076]" />
            <div className="w-2 h-4 bg-[#B6F500]" />
            <div className="w-2 h-5 bg-[#FEFFEF]" />
            <div className="w-2 h-3 bg-[#53E076]" />
            <div className="w-2 h-5 bg-[#B6F500]" />
            <div className="w-2 h-2 bg-[#53E076]" />
          </div>
        </div>
      </div>

      {/* Watermark Tag */}
      <div className="px-5 pt-3 pb-1 flex items-center justify-between w-full">
        <span className="font-space text-[9px] uppercase tracking-widest text-white/50">
          COLLAB METRIC · {data.year}
        </span>
        <div className="bg-[#0E0E0E] px-2 py-0.5 shadow-[2px_2px_0px_#B6F500] border border-white/20">
          <span className="font-space text-[10px] text-[#FEFFEF] uppercase tracking-widest font-extrabold">
            OURWRAPPED.FOREVER
          </span>
        </div>
      </div>
    </div>
  );
};
