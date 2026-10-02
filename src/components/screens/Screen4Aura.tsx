import React, { useState } from 'react';
import { StoryData } from '../../types';
import { sound } from '../../utils/audio';

interface ScreenProps {
  data: StoryData;
}

export const Screen4Aura: React.FC<ScreenProps> = ({ data }) => {
  const [selectedVibe, setSelectedVibe] = useState<number | null>(null);

  const vibeItems = [
    { text: data.topVibes[0] || 'FOREHEAD KISSES', bg: '#FFD7E3', textCol: '#131313', icon: 'favorite' },
    { text: data.topVibes[1] || 'LAUGHTER ATTACK', bg: '#B49BC8', textCol: '#131313', icon: 'sentiment_very_satisfied' },
    { text: data.topVibes[2] || 'ENDLESS BIKE RIDES', bg: '#B6F500', textCol: '#131313', icon: 'motorcycle' },
  ];

  return (
    <div className="relative w-full h-full min-h-0 bg-[#FF6B2C] text-[#131313] flex flex-col justify-between overflow-y-auto overscroll-contain select-none px-5 pt-16 pb-16">
      {/* Top Section */}
      <div className="relative z-10 w-full pt-1">
        {/* Genre Lead Tag */}
        <div className="flex items-start justify-between">
          <div className="inline-flex items-center gap-1.5 bg-[#131313] text-[#FEFFEF] px-3 py-1 rounded-full shadow-[2px_2px_0px_#131313] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#B6F500] animate-pulse" />
            <span className="font-space text-[10px] sm:text-[11px] uppercase tracking-widest font-extrabold text-[#FEFFEF]">
              YOUR TOP GENRE
            </span>
          </div>

          {/* 100% Match Corner Sticker */}
          <div className="rotate-3 bg-[#B6F500] text-[#131313] px-3 py-2 rounded-lg border-2 border-[#131313] shadow-[3px_3px_0px_#131313] flex flex-col items-center leading-none">
            <span className="font-space text-[8px] uppercase tracking-widest font-bold">AUDIO FREQ</span>
            <span className="font-syne text-[14px] font-extrabold uppercase mt-0.5">100% MATCH</span>
          </div>
        </div>

        {/* Giant COMFORT Typography */}
        <div className="relative leading-none -mt-1 select-none">
          <h1 className="font-syne text-[42px] sm:text-[52px] font-black text-[#131313] tracking-tighter uppercase leading-[0.9] whitespace-nowrap">
            COMFORT
          </h1>
        </div>

        {/* Equalizer Visualizer Strip */}
        <div className="flex items-end gap-1.5 h-7 my-3 bg-[#131313] p-1.5 rounded-[2px] border border-[#131313]">
          <div className="w-2 h-3 bg-[#FEFFEF]" />
          <div className="w-2 h-5 bg-[#FEFFEF]" />
          <div className="w-2 h-2 bg-[#B6F500]" />
          <div className="w-2 h-6 bg-[#FEFFEF]" />
          <div className="w-2 h-4 bg-[#FEFFEF]" />
          <div className="w-2 h-6 bg-[#B6F500]" />
          <div className="w-2 h-3 bg-[#FEFFEF]" />
          <div className="w-2 h-5 bg-[#FEFFEF]" />
          <div className="w-2 h-2 bg-[#FEFFEF]" />
        </div>
      </div>

      {/* Center Sub-Genre Block */}
      <div className="relative z-10 w-full my-auto">
        <div className="inline-flex items-center gap-1.5 bg-[#131313] text-[#FEFFEF] px-2.5 py-0.5 rounded-full shadow-[2px_2px_0px_#131313] mb-1.5">
          <span className="material-symbols-outlined text-[14px] text-[#B6F500]">sync_alt</span>
          <span className="font-space text-[10px] uppercase tracking-widest font-bold">
            SUB-GENRE
          </span>
        </div>

        {/* Black Box with Being My Person */}
        <div className="bg-[#131313] text-[#FEFFEF] p-4 rounded-[3px] shadow-[4px_4px_0px_#131313] border border-[#131313]">
          <h2 className="font-syne text-[26px] sm:text-[30px] font-extrabold uppercase tracking-tight text-[#FEFFEF] leading-tight">
            BEING MY
            <br />
            PERSON
          </h2>
          <div className="border-t border-dashed border-white/20 mt-3 pt-2 flex items-center justify-between">
            <span className="font-space text-[10px] sm:text-[11px] uppercase tracking-wider text-[#B6F500] font-bold">
              PLAYS UNCOUNTED
            </span>
            <span className="font-space text-[10px] sm:text-[11px] uppercase tracking-wider text-white/80 font-bold">
              ALWAYS ON REPEAT
            </span>
          </div>
        </div>
      </div>

      {/* Top Vibes Section */}
      <div className="relative z-10 w-full mt-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1 text-[#131313] font-syne font-extrabold text-[15px] uppercase tracking-wider">
            <span className="material-symbols-outlined text-[18px] symbol-fill">bolt</span>
            <span>TOP VIBES</span>
          </div>
          <div className="bg-[#FEFFEF] text-[#131313] px-2.5 py-0.5 rounded-[2px] border border-[#131313] shadow-[1.5px_1.5px_0px_#131313]">
            <span className="font-space text-[9px] uppercase tracking-widest font-extrabold">
              VERIFIED
            </span>
          </div>
        </div>

        {/* Tactile Pills */}
        <div className="flex flex-col gap-2" onClick={(e) => e.stopPropagation()}>
          {vibeItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                sound.playTap();
                setSelectedVibe(selectedVibe === idx ? null : idx);
              }}
              className={`w-full py-2.5 px-4 rounded-full border-2 border-[#131313] shadow-[3px_3px_0px_#131313] flex items-center justify-between text-left transition-all active:translate-x-0.5 active:translate-y-0.5 ${
                selectedVibe === idx ? 'scale-[1.02] shadow-[4px_4px_0px_#131313]' : ''
              }`}
              style={{ backgroundColor: item.bg, color: item.textCol }}
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[17px] symbol-fill">
                  {item.icon}
                </span>
                <span className="font-syne font-extrabold text-[13px] sm:text-[14px] uppercase tracking-wide">
                  {item.text}
                </span>
              </div>
              <span className="font-space text-[10px] font-bold uppercase tracking-wider opacity-70">
                {selectedVibe === idx ? '★ ACTIVE' : 'VIBE'}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
