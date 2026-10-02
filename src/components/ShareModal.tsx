import React, { useState } from 'react';
import { X, Copy, Check, Download, Heart } from 'lucide-react';
import { StoryData } from '../types';
import { sound } from '../utils/audio';

interface ShareModalProps {
  data: StoryData;
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ data, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    sound.playTap();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    sound.playTap();
    // Trigger print or quick alert
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-sm bg-[#131313] text-[#FEFFEF] rounded-2xl border-2 border-[#B6F500] shadow-[8px_8px_0px_#0E0E0E] p-5 flex flex-col max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#201F1F] text-white flex items-center justify-center hover:bg-[#B6F500] hover:text-[#131313] transition-colors border border-white/10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-[#B6F500] text-[20px] symbol-fill">
            stars
          </span>
          <h3 className="font-syne font-extrabold text-[18px] uppercase tracking-tight text-[#FEFFEF]">
            Share Our Wrapped
          </h3>
        </div>

        {/* Shareable Card Preview Container */}
        <div
          id="shareable-wrapped-card"
          className="w-full bg-[#B6F500] text-[#131313] rounded-xl p-4 border-2 border-[#131313] shadow-[4px_4px_0px_#131313] flex flex-col justify-between my-2 relative overflow-hidden"
        >
          {/* Diagonal stripes */}
          <div className="absolute inset-0 bg-brutalist-stripes opacity-20 pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between mb-3 border-b-2 border-[#131313] pb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#131313] flex items-center justify-center">
                <Heart className="w-3 h-3 text-[#B6F500] fill-[#B6F500]" />
              </div>
              <span className="font-space font-black text-[11px] uppercase tracking-widest">
                OUR WRAPPED {data.year}
              </span>
            </div>
            <span className="font-syne font-black text-[13px] bg-[#131313] text-[#FEFFEF] px-2 py-0.5 rounded-[2px]">
              {data.partner1Initial} + {data.partner2Initial}
            </span>
          </div>

          {/* Main Stat Summary */}
          <div className="relative z-10 flex flex-col gap-2 my-1">
            <div className="bg-[#131313] text-[#FEFFEF] p-2.5 rounded-[3px] border border-[#131313]">
              <span className="font-space text-[9px] uppercase tracking-wider text-[#B6F500] font-bold block">
                TIME SPENT TOGETHER
              </span>
              <span className="font-syne text-[28px] font-black leading-none text-[#FEFFEF]">
                {data.hoursTogether} HOURS
              </span>
            </div>

            <div className="bg-[#FEFFEF] text-[#131313] p-2.5 rounded-[3px] border border-[#131313]">
              <span className="font-space text-[9px] uppercase tracking-wider text-[#636652] font-bold block">
                YOUR LISTENING PERSONALITY
              </span>
              <span className="font-syne text-[14px] font-extrabold uppercase leading-tight text-[#131313]">
                {data.personalityTitle}
              </span>
            </div>

            <div className="bg-[#131313] text-[#FEFFEF] p-2.5 rounded-[3px] border border-[#131313]">
              <span className="font-space text-[9px] uppercase tracking-wider text-[#53E076] font-bold block">
                #1 TRACK
              </span>
              <span className="font-syne text-[13px] font-extrabold text-[#FEFFEF] block truncate">
                {data.topSong.title}
              </span>
              <span className="font-space text-[10px] text-white/70 block truncate">
                {data.topSong.artist}
              </span>
            </div>
          </div>

          {/* Bottom Barcode / Sound wave */}
          <div className="relative z-10 mt-3 pt-2 border-t-2 border-[#131313] flex items-center justify-between">
            <div className="flex items-center gap-0.5 h-4">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-[#131313]"
                  style={{ height: `${((i % 4) + 1) * 3.5}px` }}
                />
              ))}
            </div>
            <span className="font-space font-extrabold text-[9px] uppercase tracking-widest text-[#131313]">
              VERIFIED RETROSPECTIVE
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-3">
          <button
            onClick={handleCopyLink}
            className="w-full bg-[#B6F500] text-[#131313] hover:bg-[#c3fc05] font-space font-extrabold text-[13px] uppercase py-3 rounded-xl flex items-center justify-center gap-2 border border-[#131313] shadow-[3px_3px_0px_#0E0E0E] active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Link Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Shareable Link</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            className="w-full bg-[#201F1F] text-[#FEFFEF] hover:bg-[#2A2A2A] font-space font-bold text-[12px] uppercase py-2.5 rounded-xl flex items-center justify-center gap-2 border border-white/10"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Print or Save Story Card</span>
          </button>
        </div>
      </div>
    </div>
  );
};
