import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { StoryData } from '../../types';
import { sound } from '../../utils/audio';

interface ScreenProps {
  data: StoryData;
  onReplay: () => void;
  onShare: () => void;
}

export const Screen9Finale: React.FC<ScreenProps> = ({ data, onReplay, onShare }) => {
  useEffect(() => {
    // Trigger celebration confetti burst on arriving at finale
    sound.playCelebration();
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#B6F500', '#FF4FA3', '#FEFFEF', '#131313', '#4D9BFF'],
      });
    } catch {}
  }, []);

  return (
    <div className="relative w-full h-full min-h-0 bg-[#02B04C] text-[#131313] flex flex-col justify-between overflow-y-auto overscroll-contain select-none px-4 pt-16 pb-16">
      {/* Top Banner & Date Section */}
      <div className="pt-1">
        {/* Verification Tag */}
        <div className="inline-flex items-center gap-1.5 bg-[#131313] text-[#FEFFEF] px-3 py-1 rounded-[2px] shadow-[2px_2px_0px_#131313] mb-1.5 border border-[#131313]">
          <span className="material-symbols-outlined text-[14px] text-[#B6F500] symbol-fill">
            verified
          </span>
          <span className="font-space text-[10px] sm:text-[11px] uppercase tracking-widest font-extrabold">
            OFFICIAL LOVER VERIFIED
          </span>
        </div>

        {/* Sub-label */}
        <p className="font-space text-[12px] sm:text-[13px] font-extrabold text-[#131313] uppercase tracking-tight">
          YOU'VE BEEN MY TOP LISTENER SINCE
        </p>

        {/* Giant Anniversary Date */}
        <div className="bg-[#131313] text-[#B6F500] px-3 py-1 mt-1 rounded-[2px] shadow-[4px_4px_0px_#131313] border border-[#131313]">
          <h1 className="font-syne text-[36px] sm:text-[44px] font-black uppercase tracking-tighter leading-none select-all">
            {data.anniversaryDate}
          </h1>
        </div>
      </div>

      {/* Center 3 Polaroid Cards Stack */}
      <div className="relative w-full my-3 flex items-center justify-center min-h-[170px] sm:min-h-[190px]">
        {/* Left Polaroid: Track 01 */}
        <div className="absolute left-1 sm:left-4 -rotate-6 w-[105px] sm:w-[125px] bg-[#131313] text-white p-1.5 rounded-sm shadow-[4px_4px_0px_#131313] border border-white/20 transition-transform hover:scale-105 z-10">
          <div className="w-full aspect-square bg-[#2A2A2A] rounded-xs overflow-hidden relative">
            <img
              src={data.photoMemories[0]?.image}
              alt="Track 01"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback styling if local image fails
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop';
              }}
            />
            <span className="absolute top-1 left-1 bg-black/80 text-[#B6F500] font-space text-[7px] px-1 py-0.5 uppercase tracking-widest font-bold">
              TRACK 01
            </span>
          </div>
          <span className="font-space text-[9px] font-bold text-center block mt-1 truncate">
            {data.photoMemories[0]?.title || 'First Late Drive'}
          </span>
        </div>

        {/* Center Polaroid: Top Vibe (Elevated) */}
        <div className="relative z-20 w-[125px] sm:w-[145px] bg-[#131313] text-white p-1.5 rounded-sm shadow-[6px_6px_0px_#131313] border border-[#B6F500] transition-transform hover:scale-105">
          {/* Washi Tape Accent */}
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-[#FFD7E3] opacity-90 -rotate-2 border border-black/20 shadow-sm" />

          <div className="w-full aspect-square bg-[#2A2A2A] rounded-xs overflow-hidden relative">
            <img
              src={data.photoMemories[1]?.image}
              alt="Top Vibe"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=300&auto=format&fit=crop';
              }}
            />
            <div className="absolute bottom-1 right-1 bg-[#B6F500] text-[#131313] font-space text-[8px] px-1.5 py-0.5 uppercase tracking-wider font-extrabold shadow-sm">
              TOP VIBE
            </div>
          </div>
          <span className="font-space text-[10px] font-extrabold text-center block mt-1 text-[#B6F500] truncate">
            {data.photoMemories[1]?.title || `${data.partner1Initial} + ${data.partner2Initial} Forever ★`}
          </span>
        </div>

        {/* Right Polaroid: Encore */}
        <div className="absolute right-1 sm:right-4 rotate-6 w-[105px] sm:w-[125px] bg-[#131313] text-white p-1.5 rounded-sm shadow-[4px_4px_0px_#131313] border border-white/20 transition-transform hover:scale-105 z-10">
          <div className="w-full aspect-square bg-[#2A2A2A] rounded-xs overflow-hidden relative">
            <img
              src={data.photoMemories[2]?.image}
              alt="Encore"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop';
              }}
            />
            <span className="absolute top-1 right-1 bg-black/80 text-[#FEFFEF] font-space text-[7px] px-1 py-0.5 uppercase tracking-widest font-bold">
              ENCORE
            </span>
          </div>
          <span className="font-space text-[9px] font-bold text-center block mt-1 truncate">
            {data.photoMemories[2]?.title || 'Goofy Face Era'}
          </span>
        </div>
      </div>

      {/* Main Retrospective Finale Card */}
      <div className="w-full bg-[#131313] text-[#FEFFEF] p-4 rounded-[3px] shadow-[5px_5px_0px_#131313] border border-[#131313] mb-2">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#B6F500] animate-pulse" />
          <span className="font-space text-[10px] uppercase tracking-widest text-[#B6F500] font-extrabold">
            RETROSPECTIVE FINALE
          </span>
        </div>

        {/* Giant Headline */}
        <h2 className="font-syne text-[26px] sm:text-[32px] font-black uppercase tracking-tighter text-[#FEFFEF] leading-[0.95]">
          HAPPY
          <br />
          BOYFRIEND'S
          <br />
          <span className="text-[#B6F500]">DAY.</span>
        </h2>

        {/* Quote Badge */}
        <div className="mt-3 bg-[#FEFFEF] text-[#131313] p-2.5 rounded-[3px] flex items-center gap-2 border border-[#131313] shadow-[2px_2px_0px_#131313]">
          <span className="material-symbols-outlined text-[18px] text-[#131313] shrink-0 symbol-fill">
            music_note
          </span>
          <p className="font-space text-[11px] sm:text-[12px] font-bold leading-tight">
            "Thank you for being my favorite album I never skip."
          </p>
        </div>
      </div>

      {/* Action Buttons: Replay & Share */}
      <div className="flex items-center gap-2 w-full" onClick={(e) => e.stopPropagation()}>
        {/* Replay */}
        <button
          onClick={() => {
            sound.playTap();
            onReplay();
          }}
          className="flex-1 bg-[#131313] text-[#FEFFEF] hover:bg-[#201F1F] active:translate-x-0.5 active:translate-y-0.5 transition-all py-3 px-3 rounded-[3px] flex items-center justify-center gap-1.5 shadow-[3px_3px_0px_#131313] border border-[#131313] font-space text-[12px] sm:text-[13px] uppercase font-extrabold"
        >
          <span className="material-symbols-outlined text-[16px]">replay</span>
          <span>REPLAY</span>
        </button>

        {/* Share */}
        <button
          onClick={() => {
            sound.playTap();
            onShare();
          }}
          className="flex-1 bg-[#B6F500] text-[#131313] hover:bg-[#c2fc08] active:translate-x-0.5 active:translate-y-0.5 transition-all py-3 px-3 rounded-[3px] flex items-center justify-center gap-1.5 shadow-[3px_3px_0px_#131313] border border-[#131313] font-space text-[12px] sm:text-[13px] uppercase font-black"
        >
          <span className="material-symbols-outlined text-[16px]">ios_share</span>
          <span>SHARE STORY</span>
        </button>
      </div>

      {/* Waveform Micro Audio Accent */}
      <div className="flex items-center justify-center gap-1 my-2">
        <span className="w-1 bg-[#131313] rounded-full h-3" />
        <span className="w-1 bg-[#131313] rounded-full h-5" />
        <span className="w-1 bg-[#131313] rounded-full h-2" />
        <span className="w-1 bg-[#131313] rounded-full h-6" />
        <span className="w-1 bg-[#131313] rounded-full h-3" />
      </div>
    </div>
  );
};
