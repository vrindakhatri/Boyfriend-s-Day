import React, { useState } from 'react';
import { StoryData } from '../../types';
import { sound } from '../../utils/audio';

interface ScreenProps {
  data: StoryData;
}

export const Screen2Minutes: React.FC<ScreenProps> = ({ data }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className="relative w-full h-full min-h-0 bg-[#131313] text-[#FEFFEF] flex flex-col justify-between overflow-y-auto overscroll-contain select-none pt-16 pb-16">
      {/* Pink Frame Container */}
      <div className="relative w-full bg-[#FFD7E3] text-[#3E0021] overflow-hidden flex flex-col justify-between p-5 min-h-[min(540px,75dvh)] border-b-2 border-[#131313]">
        {/* Edge Pattern Diagonal Bars Accent */}
        <div className="absolute -right-8 -top-6 w-36 h-36 opacity-15 pointer-events-none rotate-12 flex flex-col gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-full h-3 bg-[#3E0021]" />
          ))}
        </div>

        {/* Top Section: Lead-in Header and Sticker Badge */}
        <div className="flex items-start justify-between gap-2 relative z-10 pt-1">
          <div className="flex flex-col">
            <span className="font-space font-bold text-[11px] sm:text-[12px] tracking-wider uppercase text-[#3E0021]">
              Uninterrupted Sync
            </span>
            <h2 className="font-space font-extrabold text-[18px] uppercase text-[#3E0021] tracking-tight mt-0.5 leading-tight max-w-[170px]">
              Total time streamed
            </h2>
          </div>

          {/* Sticker Decal: Crisp Lime Pop Angle */}
          <div className="rotate-3 transform translate-x-1 hover:rotate-0 transition-transform">
            <div className="bg-[#B6F500] text-[#131313] px-2.5 py-1 rounded-[2px] shadow-[2px_2px_0px_#131313] border border-[#131313] flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px] symbol-fill text-[#131313]">
                stars
              </span>
              <span className="font-space text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold whitespace-nowrap">
                TOP TRACK SINCE SEPT '25
              </span>
            </div>
          </div>
        </div>

        {/* Center Section: Massive Gigantic Metric */}
        <div className="relative my-auto py-2 flex flex-col items-center justify-center overflow-visible z-10">
          {/* Background giant rotated accent number footprint */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 font-syne text-[110px] leading-none text-[#3E0021] opacity-5 select-none pointer-events-none -rotate-[8deg]">
            #1
          </div>

          {/* Hero Overflows Edge Stat */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-syne text-[58px] sm:text-[68px] text-[#3E0021] font-extrabold tracking-tighter leading-none scale-y-105 uppercase select-all">
              {data.hoursTogether}
            </span>
            <span className="font-syne text-[26px] sm:text-[32px] text-[#FEFFEF] tracking-tight font-extrabold uppercase -mt-2 bg-[#3E0021] px-4 py-1 rounded-[2px] -rotate-[1deg] shadow-[2px_2px_0px_#131313]">
              HOURS
            </span>
          </div>

          {/* Audio Graphic Rhythm Bars */}
          <div className="flex items-end gap-1.5 h-6 mt-4">
            <div className="w-1.5 h-3 bg-[#BE1171] animate-pulse" />
            <div className="w-1.5 h-5 bg-[#BE1171]" />
            <div className="w-1.5 h-2 bg-[#BE1171]" />
            <div className="w-1.5 h-6 bg-[#B6F500] border border-[#131313]" />
            <div className="w-1.5 h-4 bg-[#BE1171]" />
            <div className="w-1.5 h-5 bg-[#FEFFEF] border border-[#131313]" />
            <div className="w-1.5 h-3 bg-[#BE1171]" />
          </div>
        </div>

        {/* Editorial Subtext Section */}
        <div className="relative z-10 flex flex-col gap-2">
          <div className="bg-[#131313]/10 p-2.5 rounded-[2px] border border-[#3E0021]/15">
            <p className="font-space text-[14px] sm:text-[15px] font-bold text-[#3E0021] leading-snug">
              together, on calls, or just thinking about each other. And I'd do it all again.
            </p>
          </div>

          {/* Micro Badges / Playful Context */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            <div className="bg-[#FEFFEF] px-2 py-0.5 rounded-[2px] border border-[#131313] shadow-[1px_1px_0px_#131313]">
              <span className="font-space text-[10px] text-[#131313] font-bold uppercase tracking-wider">
                {data.minutesTogether} MINS
              </span>
            </div>
            <div className="bg-[#3E0021] px-2 py-0.5 rounded-[2px] shadow-[1px_1px_0px_#131313]">
              <span className="font-space text-[10px] text-[#FFD7E3] font-bold uppercase tracking-wider">
                ZERO SKIPS
              </span>
            </div>
            <div className="bg-[#02B04C] px-2 py-0.5 rounded-[2px] border border-[#131313] shadow-[1px_1px_0px_#131313]">
              <span className="font-space text-[10px] text-[#FEFFEF] font-bold uppercase tracking-wider">
                ON REPEAT 24/7
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Story Micro-Card Deck (Dark bottom block) */}
      <div className="px-5 pt-4 pb-2 flex flex-col gap-2 relative z-30" onClick={(e) => e.stopPropagation()}>
        <div className="bg-[#2A2A2A] p-3 rounded-lg flex items-center justify-between border border-[#353534] shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-sm bg-[#B6F500] flex items-center justify-center text-[#131313] shadow-sm">
              <span className="material-symbols-outlined text-[20px] symbol-fill">graphic_eq</span>
            </div>
            <div className="flex flex-col">
              <span className="font-space font-bold text-[14px] text-[#FEFFEF]">Forever sync</span>
              <span className="font-space text-[11px] text-[#C3CAAD] uppercase">
                377 days uninterrupted
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playTap();
              setShowDrawer(!showDrawer);
            }}
            className="bg-[#FEFFEF] text-[#131313] font-space text-[11px] px-3 py-1.5 rounded-full uppercase tracking-wider font-extrabold active:translate-x-0.5 active:translate-y-0.5 transition-transform border border-black shadow-[2px_2px_0px_#B6F500]"
          >
            {showDrawer ? 'Hide Stats' : 'View Stats'}
          </button>
        </div>

        {/* Breakdown Reveal Drawer */}
        {showDrawer && (
          <div className="bg-[#353534] p-3 rounded-lg flex flex-col gap-2 border border-[#434933] shadow-lg animate-in fade-in zoom-in-95 duration-150">
            <div className="flex justify-between items-center py-0.5 border-b border-white/10 pb-1.5">
              <span className="font-space text-[13px] text-[#E5E2E1] font-medium">
                Pure unfiltered yapping
              </span>
              <span className="font-syne font-bold text-[15px] text-[#B6F500]">
                {data.breakdown.pureYappingHours} hrs
              </span>
            </div>
            <div className="flex justify-between items-center py-0.5 border-b border-white/10 pb-1.5">
              <span className="font-space text-[13px] text-[#E5E2E1] font-medium">
                Heart-full moments
              </span>
              <span className="font-syne font-bold text-[15px] text-[#53E076]">
                {data.breakdown.heartFullMomentsHours} hrs
              </span>
            </div>
            <div className="flex justify-between items-center py-0.5 border-b border-white/10 pb-1.5">
              <span className="font-space text-[13px] text-[#E5E2E1] font-medium">
                Late night overthinking and venting
              </span>
              <span className="font-syne font-bold text-[15px] text-[#FFB0CC] shrink-0 ml-2">
                {data.breakdown.lateNightOverthinkingHours} hrs
              </span>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="font-space text-[13px] text-[#E5E2E1] font-medium">
                Shared braincells
              </span>
              <span className="font-syne font-bold text-[15px] text-[#B6F500]">
                {data.breakdown.sharedBraincellsHours} hrs
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
