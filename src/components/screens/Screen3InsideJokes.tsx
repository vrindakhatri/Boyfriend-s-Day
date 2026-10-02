import React, { useState, useEffect } from 'react';
import { StoryData } from '../../types';
import { sound } from '../../utils/audio';

interface ScreenProps {
  data: StoryData;
}

export const Screen3InsideJokes: React.FC<ScreenProps> = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSideB, setIsSideB] = useState(false);
  const [progress, setProgress] = useState(100);
  const activeSong = isSideB
    ? {
        ...data.topSong,
        title: 'Soniyo',
        artist: 'Raju Singh, Sonu Nigam, Shreya Ghoshal',
      }
    : data.topSong;
    const activeLyric = isSideB
      ? 'Tu de-de mera saath, thamle haath, chahe jo bhi ho baat, tu bas de-de mera saath'
      : 'Tere saath main duniya dekhna chahun, har mausam jeena chahun, aisa hai mera khwaab piya';

  const togglePlayback = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playTap();
    if (isPlaying) {
      sound.stopMusic();
      setIsPlaying(false);
    } else {
      sound.startMusic();
      setIsPlaying(true);
    }
  };

  const toggleSide = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playTap();
    setIsSideB((current) => !current);
  };

  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 5 : prev + 2));
      }, 500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  return (
    <div className="relative w-full h-full min-h-0 bg-[#131313] text-[#FEFFEF] flex flex-col justify-between overflow-y-auto overscroll-contain select-none px-5 pt-16 pb-16">
      {/* Top Segment Tags */}
      <div className="flex items-center justify-between mt-1 mb-3 pt-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#2A2A2A] shadow-md border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#B6F500] animate-pulse" />
          <span className="font-space text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#B6F500]">
            TRACK 03 OF 09
          </span>
        </div>
        <div className="-rotate-2 px-3 py-0.5 rounded bg-[#FFD7E3] shadow-md border border-[#131313]">
          <span className="font-space text-[10px] sm:text-[11px] uppercase tracking-wider text-[#BE1171] font-extrabold">
            HEAVY ROTATION
          </span>
        </div>
      </div>

      {/* Editorial Headline */}
      <div className="flex flex-col mb-3">
        <span className="font-space text-[11px] tracking-widest uppercase text-[#C3CAAD] font-bold">
          YOUR #1 TRACK
        </span>
        <h1 className="font-syne text-[30px] sm:text-[36px] font-extrabold tracking-tighter uppercase text-[#FEFFEF] mt-0.5 leading-none">
          TOP TRACKS
        </h1>
      </div>

      {/* Center Visual: Album Art Sleeve Canvas */}
      <div className="relative w-full aspect-square max-w-[290px] sm:max-w-[320px] mx-auto mb-3 flex items-center justify-center p-1 rounded-xl bg-[#0E0E0E] shadow-2xl border border-white/10">
        <div className="relative w-full h-full rounded-lg overflow-hidden flex flex-col justify-between p-3.5 bg-[#4B1F8C]">
          {/* Diagonal Pattern Accent */}
          <div className="absolute inset-0 bg-brutalist-stripes-white opacity-20 pointer-events-none" />

          {/* Top Info Tag */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="font-space text-[9px] sm:text-[10px] tracking-widest uppercase text-[#EDEDE6] bg-[#131313]/80 px-2 py-0.5 rounded border border-white/10">
              SIDE {isSideB ? 'B' : 'A'} · 45 RPM
            </span>
            <div className="flex items-center gap-1">
              <div
                className={`w-1.5 h-1.5 rounded-full ${isSideB ? 'bg-[#EDEDE6]' : 'bg-[#B6F500]'}`}
              />
              <div
                className={`w-1.5 h-1.5 rounded-full ${isSideB ? 'bg-[#B6F500]' : 'bg-[#EDEDE6]'}`}
              />
            </div>
          </div>

          {/* Interlocking Geometric Vinyl Centerpiece */}
          <div className="relative z-10 w-full flex items-center justify-center my-auto py-1">
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Outer Echo Rings */}
              <div className={`absolute inset-0 rounded-full bg-[#B6F500]/25 ${isPlaying ? 'animate-ping' : ''}`} />
              <div className="absolute w-28 h-28 rounded-full bg-[#2A2A2A]/90 flex items-center justify-center border border-white/20">
                {/* Center Vinyl Core */}
                <div className={`relative w-20 h-20 rounded-full bg-[#131313] flex items-center justify-center overflow-hidden border border-white/15 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }}>
                  {/* Interlocking Bi-Color Motif */}
                  <div className="absolute w-12 h-12 -left-2 rounded-full bg-[#B6F500] mix-blend-screen opacity-90" />
                  <div className="absolute w-12 h-12 -right-2 rounded-full bg-[#FFD7E3] mix-blend-screen opacity-90" />
                  <button
                    type="button"
                    onClick={toggleSide}
                    aria-label={`Switch to Side ${isSideB ? 'A' : 'B'}`}
                    className="relative z-20 w-8 h-8 rounded-full bg-[#131313] flex items-center justify-center border border-white/20 cursor-pointer hover:scale-110 transition-transform"
                  >
                    <span className="material-symbols-outlined text-[13px] text-[#FEFFEF] symbol-fill">
                      favorite
                    </span>
                  </button>
                </div>
              </div>

              {/* Stereo Badge */}
              <div className="absolute -top-1 -right-1 rotate-12 px-1.5 py-0.5 rounded bg-[#B6F500] shadow-md border border-[#131313]">
                <span className="font-space text-[9px] uppercase tracking-wider text-[#131313] font-extrabold">
                  STEREO
                </span>
              </div>
            </div>
          </div>

          {/* Album Footer Track Label */}
          <div className="relative z-10 flex items-end justify-between">
            <div className="flex flex-col">
              <span className="font-space text-[9px] uppercase tracking-wider text-white/70">
                CAT NO. {data.partner1Initial}{data.partner2Initial}-{data.year}
              </span>
              <span className="font-syne text-[14px] uppercase tracking-tight text-[#EDEDE6] font-extrabold">
                {isSideB ? 'XOXO' : 'MWAH'}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1 h-2.5 bg-[#B6F500]" />
              <div className="w-1 h-4 bg-[#B6F500]" />
              <div className="w-1 h-2 bg-[#B6F500]" />
              <div className="w-1 h-3.5 bg-[#B6F500]" />
            </div>
          </div>
        </div>

        {/* Floating Sticker Badge Overlay */}
        <div className="absolute -bottom-3 -right-2 rotate-[4deg] z-20 bg-[#B6F500] text-[#131313] px-3 py-1 rounded-full shadow-[3px_3px_0px_#131313] border border-[#131313] flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[14px] symbol-fill">repeat</span>
          <span className="font-space text-[10px] sm:text-[11px] uppercase tracking-widest font-extrabold">
            Played 377 times
          </span>
        </div>
      </div>

      {/* Song Detail & Interactive Audio Card */}
      <div className="w-full flex flex-col bg-[#201F1F] rounded-xl p-3.5 shadow-md mb-2.5 border border-white/5" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#B6F500] text-[18px] symbol-fill">
                graphic_eq
              </span>
              <span className="font-syne text-[16px] text-[#FEFFEF] font-bold truncate">
                {activeSong.title}
              </span>
            </div>
            <span className="font-space text-[12px] text-[#C3CAAD] font-medium mt-0.5 truncate">
              {activeSong.artist}
            </span>
          </div>

          {/* Tactile Play/Pause Trigger */}
          <button
            onClick={togglePlayback}
            aria-label="Toggle playback"
            className="w-10 h-10 rounded-full bg-[#B6F500] text-[#131313] flex items-center justify-center active:scale-95 shadow-md shrink-0 border border-[#131313] hover:brightness-105 transition-transform"
          >
            <span className="material-symbols-outlined text-[24px] symbol-fill">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>
        </div>

        {/* Minimal Playback Bar */}
        <div className="w-full flex flex-col gap-1 mt-1">
          <div className="w-full h-2 rounded-full bg-[#353534] overflow-hidden relative">
            <div
              className="h-full bg-[#FEFFEF] transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[#C3CAAD] font-space text-[10px] tracking-wider font-semibold">
            <span>{activeSong.duration}</span>
            <span className="text-[#B6F500] uppercase font-bold">
              {isPlaying ? 'PLAYING NOW' : 'FULL REPLAY'}
            </span>
            <span>{activeSong.duration}</span>
          </div>
        </div>
      </div>

      {/* Heartfelt Memory Editorial Quote Block */}
      <div className="relative w-full rounded-xl p-3 bg-[#2A2A2A] shadow-md mb-2 border border-white/5">
        <div className="flex items-start gap-2">
          <span className="material-symbols-outlined text-[#B6F500] text-[18px] shrink-0 mt-0.5 symbol-fill">
            format_quote
          </span>
          <p className="font-space text-[12px] sm:text-[13px] text-[#FEFFEF] leading-snug font-medium italic">
            "{activeLyric}"
          </p>
        </div>
        <div className="flex items-center justify-end gap-1.5 mt-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#53E076] animate-ping" />
          <span className="font-space text-[9px] tracking-wider text-[#C3CAAD] font-bold">
            for you
          </span>
        </div>
      </div>
    </div>
  );
};
