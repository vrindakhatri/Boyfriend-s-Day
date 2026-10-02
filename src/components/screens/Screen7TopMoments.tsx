import React from 'react';
import { StoryData } from '../../types';
import { sound } from '../../utils/audio';

interface ScreenProps {
  data: StoryData;
}

export const Screen7TopMoments: React.FC<ScreenProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full min-h-0 bg-[#131313] text-[#FEFFEF] flex flex-col justify-between overflow-y-auto overscroll-contain select-none px-5 pt-16 pb-16">
      {/* Top Header & Tape Decals */}
      <div className="pt-1">
        <div className="flex items-center justify-between mb-2">
          {/* Heavy Rotation Tape */}
          <div className="bg-[#B6F500] text-[#131313] px-2.5 py-0.5 -rotate-1 shadow-[2px_2px_0px_#131313] flex items-center gap-1 border border-[#131313]">
            <span className="material-symbols-outlined text-[14px] symbol-fill">equalizer</span>
            <span className="font-space text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold">
              HEAVY ROTATION
            </span>
          </div>
          <span className="font-space text-[10px] sm:text-[11px] text-[#C3CAAD] uppercase tracking-wider font-bold">
            377 DAYS REVIEW
          </span>
        </div>

        {/* Giant Headline */}
        <h1 className="font-syne text-[36px] sm:text-[42px] font-black uppercase tracking-tighter text-[#FEFFEF] leading-none">
          YOUR TOP
          <br />
          5
        </h1>
        <p className="font-space text-[13px] sm:text-[14px] text-[#E5E2E1] font-semibold mt-1 mb-3">
          The moments that were on heavy rotation.
        </p>
      </div>

      {/* Top 5 Ranked Rows */}
      <div className="flex flex-col gap-1.5 w-full my-auto" onClick={(e) => e.stopPropagation()}>
        {data.top5Moments.map((item, idx) => {
          const isTopOne = idx === 0;

          return (
            <div
              key={item.rank}
              onClick={() => sound.playTap()}
              className={`w-full flex items-center justify-between p-2 sm:p-2.5 rounded-[3px] transition-transform active:scale-[0.99] border ${
                isTopOne
                  ? 'bg-[#B6F500] text-[#131313] border-[#131313] shadow-[3px_3px_0px_#131313]'
                  : 'bg-[#201F1F] text-[#FEFFEF] border-white/10 hover:bg-[#2A2A2A]'
              }`}
            >
              {/* Left Rank & Icon & Titles */}
              <div className="flex items-center gap-2.5 min-w-0">
                {/* Rank Number Badge */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-syne font-black text-[16px] sm:text-[18px] shrink-0 rounded-[2px] ${
                    isTopOne
                      ? 'bg-[#131313] text-[#FEFFEF]'
                      : 'bg-[#131313] text-[#FEFFEF] border border-white/20'
                  }`}
                >
                  {item.rank}
                </div>

                {/* Custom Icon Box */}
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-[2px] flex items-center justify-center shrink-0 border border-black/10"
                  style={{
                    backgroundColor: item.color,
                    color: isTopOne ? '#131313' : '#131313',
                  }}
                >
                  <span className="material-symbols-outlined text-[17px] symbol-fill">
                    {item.icon}
                  </span>
                </div>

                {/* Titles */}
                <div className="flex flex-col min-w-0">
                  <span
                    className={`font-syne font-extrabold text-[14px] sm:text-[15px] tracking-tight ${
                      item.title === 'Unmatched patience with me'
                        ? 'whitespace-normal leading-tight'
                        : 'truncate'
                    } ${
                      isTopOne ? 'text-[#131313]' : 'text-[#FEFFEF]'
                    }`}
                  >
                    {item.title === 'Unmatched patience with me' ? (
                      <>
                        Unmatched patience
                        <br />
                        with me
                      </>
                    ) : (
                      item.title
                    )}
                  </span>
                  <span
                    className={`font-space text-[9px] sm:text-[10px] uppercase font-bold tracking-wider ${
                      isTopOne ? 'text-[#131313]/80' : 'text-[#C3CAAD]'
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Right Play Count */}
              <div className="flex flex-col items-end shrink-0 pl-2">
                <span
                  className={`font-syne font-black text-[18px] sm:text-[20px] leading-none ${
                    isTopOne ? 'text-[#131313]' : 'text-[#FEFFEF]'
                  }`}
                >
                  {item.plays}
                </span>
                <span
                  className={`font-space text-[8px] sm:text-[9px] uppercase tracking-wider font-extrabold ${
                    isTopOne ? 'text-[#131313]/80' : 'text-[#C3CAAD]'
                  }`}
                >
                  PLAYS
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Compatibility Badge Strip */}
      <div className="mt-3 bg-[#201F1F] p-2.5 rounded-[3px] border border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mini Equalizer */}
          <div className="flex items-end gap-1 h-4">
            <div className="w-1 bg-[#B6F500] h-2" />
            <div className="w-1 bg-[#B6F500] h-3.5" />
            <div className="w-1 bg-[#B6F500] h-1.5" />
            <div className="w-1 bg-[#B6F500] h-4" />
          </div>
          <span className="font-space text-[10px] sm:text-[11px] uppercase tracking-wider text-[#FEFFEF] font-bold">
            REPEAT LISTENER: 99.9% COMPATIBILITY
          </span>
        </div>
        <span className="material-symbols-outlined text-[18px] text-[#B6F500] symbol-fill">
          verified
        </span>
      </div>
    </div>
  );
};
