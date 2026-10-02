import React, { useState } from 'react';
import { StoryData } from '../../types';
import { sound } from '../../utils/audio';

interface ScreenProps {
  data: StoryData;
}

export const Screen5Personality: React.FC<ScreenProps> = ({ data }) => {
  const [isWiggling, setIsWiggling] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playTap();
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 300);
  };

  return (
    <div className="relative w-full h-full min-h-0 bg-[#4D9BFF] text-[#121212] flex flex-col justify-between overflow-y-auto overscroll-contain select-none px-5 pt-16 pb-16">
      {/* Top Header Decals */}
      <div className="w-full flex items-center justify-between mb-2 z-10 pt-1">
        <div className="inline-flex items-center gap-1.5 bg-[#121212] text-[#FEFFEF] px-3 py-1 rounded-full shadow-[2px_2px_0px_#FEFFEF]">
          <span className="material-symbols-outlined text-[15px] text-[#B6F500] symbol-fill">
            psychology_alt
          </span>
          <span className="font-space text-[10px] sm:text-[11px] tracking-widest uppercase font-bold">
            PERSONALITY METRIC
          </span>
        </div>
        <div className="bg-[#B6F500] text-[#121212] px-2.5 py-0.5 rounded-full font-space text-[10px] sm:text-[11px] uppercase font-extrabold tracking-wider border border-[#121212] rotate-2 shadow-[1.5px_1.5px_0px_#121212]">
          CARD 05 / 09
        </div>
      </div>

      {/* Screen Title Stamp */}
      <div className="w-full text-center mb-3 z-10">
        <h2 className="font-syne text-[26px] sm:text-[30px] font-black uppercase tracking-tighter text-[#121212] leading-none drop-shadow-[1px_1px_0px_#FEFFEF]">
          YOUR LISTENING PERSONALITY
        </h2>
        <p className="font-space text-[10px] sm:text-[11px] uppercase tracking-wider text-[#121212]/80 mt-1 font-bold">
          BASED ON 377 DAYS OF OBSESSIVE BEHAVIOR
        </p>
      </div>

      {/* Center Wrapped Personality Card */}
      <div
        onClick={handleCardClick}
        className={`w-full bg-[#EDEDE6] text-[#121212] rounded-xl p-4 border-[1.5px] border-[#121212] shadow-[5px_5px_0px_#121212] relative flex flex-col items-center cursor-pointer transition-transform duration-150 ${
          isWiggling ? 'scale-[0.98] rotate-1' : 'hover:scale-[1.01]'
        }`}
      >
        {/* Top Decorative Sticker Pill */}
        <div className="absolute -top-3 right-3 bg-[#FFD7E3] text-[#BE1171] font-space text-[10px] uppercase px-3 py-1 rounded-full border-[1.5px] border-[#121212] rotate-3 shadow-[2px_2px_0px_#121212] font-extrabold">
          100% UNFILTERED YOU
        </div>

        {/* Abstract Brutalist Pop Character Badge */}
        <div className="relative w-24 h-24 my-1 flex items-center justify-center">
          {/* Background Halo Geometric Stamp */}
          <div className="absolute inset-0 bg-[#B6F500] rounded-full border-[1.5px] border-[#121212] shadow-[3px_3px_0px_#121212] -rotate-6" />

          {/* Character SVG Illustration */}
          <svg
            className="relative z-10 w-20 h-20"
            fill="none"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Torso */}
            <path
              d="M25 88C25 72 36 62 50 62C64 62 75 72 75 88"
              fill="#121212"
              stroke="#121212"
              strokeWidth="3"
            />
            <path
              d="M35 88C35 76 42 70 50 70C58 70 65 76 65 88"
              fill="#FF4FA3"
              stroke="#121212"
              strokeWidth="2"
            />
            {/* Heart Character Head */}
            <path
              d="M50 28 C50 18 36 12 26 22 C14 34 26 50 50 62 C74 50 86 34 74 22 C64 12 50 18 50 28 Z"
              fill="#FF4FA3"
              stroke="#121212"
              strokeLinejoin="round"
              strokeWidth="3.5"
            />
            {/* Cute Pop Sunglasses */}
            <rect fill="#121212" height="11" rx="3" width="16" x="29" y="27" />
            <rect fill="#121212" height="11" rx="3" width="16" x="55" y="27" />
            <line stroke="#121212" strokeWidth="3.5" x1="45" x2="55" y1="32" y2="32" />
            {/* Highlights */}
            <line stroke="#FEFFEF" strokeLinecap="round" strokeWidth="1.5" x1="31" x2="36" y1="30" y2="35" />
            <line stroke="#FEFFEF" strokeLinecap="round" strokeWidth="1.5" x1="57" x2="62" y1="30" y2="35" />
            {/* Sparkle */}
            <path
              d="M78 14L80 18L84 20L80 22L78 26L76 22L72 20L76 18L78 14Z"
              fill="#B6F500"
              stroke="#121212"
              strokeWidth="1.5"
            />
          </svg>

          {/* Dynamic Shield Stamp */}
          <div className="absolute -bottom-1 -left-2 bg-[#FEFFEF] border-[1.5px] border-[#121212] rounded-full p-1 shadow-[2px_2px_0px_#121212] -rotate-[8deg]">
            <span className="material-symbols-outlined text-[14px] text-[#121212] block symbol-fill">
              shield
            </span>
          </div>
        </div>

        {/* Punchy Title */}
        <h3 className="font-syne text-[20px] sm:text-[23px] font-extrabold uppercase tracking-tight text-center text-[#121212] leading-[1.05] mt-2 mb-1 px-1">
          {data.personalityTitle}
        </h3>

        {/* Editorial Narrative */}
        <p className="font-space text-[12px] sm:text-[13px] text-center text-[#121212]/85 font-semibold px-2 mb-3">
          {data.personalityDesc}
        </p>

        {/* Signature Trait Chips Grid */}
        <div className="w-full flex flex-col gap-2 my-1">
          {data.personalityTraits.map((trait, i) => (
            <div
              key={i}
              className="w-full flex items-center justify-between px-3 py-1.5 rounded-full border-[1.5px] border-[#121212] shadow-[2.5px_2.5px_0px_#121212]"
              style={{
                backgroundColor: trait.color,
                color: '#121212',
                transform: i === 0 ? 'rotate(-1deg)' : i === 1 ? 'rotate(1.5deg)' : 'rotate(-0.5deg)',
              }}
            >
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="material-symbols-outlined text-[16px] shrink-0 symbol-fill">
                  {i === 0 ? 'timer' : i === 1 ? 'history_edu' : 'restaurant'}
                </span>
                <span className="font-space text-[11px] sm:text-[12px] uppercase tracking-wider font-extrabold truncate">
                  {trait.label}
                </span>
              </div>
              <span className="font-space text-[9px] uppercase font-bold shrink-0 bg-[#121212] text-white px-2 py-0.5 rounded-full ml-1">
                {trait.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Mini Waveform */}
        <div className="flex items-end justify-center gap-1 mt-3 w-full h-4">
          <div className="w-1 bg-[#121212] h-2 rounded-full" />
          <div className="w-1 bg-[#121212] h-4 rounded-full" />
          <div className="w-1 bg-[#121212] h-3 rounded-full" />
          <div className="w-1 bg-[#121212] h-4 rounded-full" />
          <div className="w-1 bg-[#121212] h-2 rounded-full" />
          <div className="w-1 bg-[#121212] h-4 rounded-full" />
          <div className="w-1 bg-[#121212] h-1 rounded-full" />
        </div>
      </div>

      {/* Bottom Stat Note Callout */}
      <div className="w-full mt-3 bg-[#121212] text-[#FEFFEF] p-3 rounded-lg border-[1.5px] border-[#FEFFEF] shadow-[3px_3px_0px_#FEFFEF] flex items-center gap-2.5 z-10">
        <div className="w-8 h-8 rounded-full bg-[#B6F500] text-[#121212] flex items-center justify-center shrink-0 border border-[#FEFFEF]">
          <span className="material-symbols-outlined text-[18px] symbol-fill">favorite</span>
        </div>
        <p className="font-space text-[13px] sm:text-[14px] leading-tight text-[#FEFFEF] font-bold">
          Only 1 in 8 billion people share this personality.{' '}
          <span className="text-[#B6F500] font-extrabold underline decoration-2 underline-offset-2">
            And you're mine.
          </span>
        </p>
      </div>
    </div>
  );
};
