import React from 'react';
import { X, Play, RotateCcw, SlidersHorizontal, Share2 } from 'lucide-react';
import { StoryData } from '../types';
import { sound } from '../utils/audio';

interface StoryOverviewModalProps {
  data: StoryData;
  isOpen: boolean;
  currentSlide: number;
  onClose: () => void;
  onSelectSlide: (index: number) => void;
  onOpenCustomizer: () => void;
  onOpenShare: () => void;
}

const slideTitles = [
  { id: 0, title: 'Wrapped Intro', theme: '#B6F500', icon: 'bolt' },
  { id: 1, title: 'Minutes Together', theme: '#FFD7E3', icon: 'schedule' },
  { id: 2, title: 'Top Tracks', theme: '#4B1F8C', icon: 'album' },
  { id: 3, title: 'Relationship Aura', theme: '#FF6B2C', icon: 'psychology' },
  { id: 4, title: 'Mine', theme: '#4D9BFF', icon: 'face' },
  { id: 5, title: 'Listener Archetype', theme: '#FEFFEF', icon: 'groups' },
  { id: 6, title: 'Top 5 Moments', theme: '#1DB954', icon: 'format_list_numbered' },
  { id: 7, title: 'Artist of the Year', theme: '#B6F500', icon: 'star' },
  { id: 8, title: 'Retrospective Finale', theme: '#02B04C', icon: 'favorite' },
];

export const StoryOverviewModal: React.FC<StoryOverviewModalProps> = ({
  data,
  isOpen,
  currentSlide,
  onClose,
  onSelectSlide,
  onOpenCustomizer,
  onOpenShare,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
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

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-full bg-[#B6F500] flex items-center justify-center text-[#131313]">
            <span className="material-symbols-outlined text-[16px] symbol-fill">grid_view</span>
          </div>
          <div>
            <h3 className="font-syne font-extrabold text-[17px] uppercase tracking-tight text-[#FEFFEF]">
              Our Wrapped Slides
            </h3>
            <p className="font-space text-[10px] text-[#C3CAAD] uppercase tracking-wider font-bold">
              {data.partner1Initial} + {data.partner2Initial} · {data.year}
            </p>
          </div>
        </div>

        {/* Slides Grid */}
        <div className="grid grid-cols-3 gap-2 my-2">
          {slideTitles.map((slide) => {
            const isActive = currentSlide === slide.id;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  sound.playTap();
                  onSelectSlide(slide.id);
                  onClose();
                }}
                className={`p-2.5 rounded-xl border flex flex-col items-center justify-between text-center min-h-[85px] transition-all relative overflow-hidden group ${
                  isActive
                    ? 'border-[#B6F500] bg-[#2A2A2A] shadow-[3px_3px_0px_#B6F500] scale-[1.02]'
                    : 'border-white/10 bg-[#201F1F] hover:border-white/30 hover:bg-[#252424]'
                }`}
              >
                {/* Top Number */}
                <div className="w-full flex items-center justify-between text-[9px] font-space font-extrabold text-[#C3CAAD]">
                  <span>0{slide.id + 1}</span>
                  <div
                    className="w-2.5 h-2.5 rounded-full border border-black/40"
                    style={{ backgroundColor: slide.theme }}
                  />
                </div>

                {/* Icon */}
                <span className="material-symbols-outlined text-[20px] text-[#FEFFEF] group-hover:text-[#B6F500] transition-colors my-1 symbol-fill">
                  {slide.icon}
                </span>

                {/* Title */}
                <span className="font-space text-[10px] font-bold leading-tight text-[#FEFFEF] line-clamp-2">
                  {slide.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/10">
          <button
            onClick={() => {
              onClose();
              onOpenCustomizer();
            }}
            className="flex-1 py-2 px-3 rounded-xl bg-[#201F1F] text-[#FEFFEF] hover:bg-[#2A2A2A] border border-white/10 flex items-center justify-center gap-1.5 font-space text-[11px] uppercase font-bold"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#B6F500]" />
            <span>Customize</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenShare();
            }}
            className="flex-1 py-2 px-3 rounded-xl bg-[#B6F500] text-[#131313] hover:bg-[#c2fc08] border border-[#131313] flex items-center justify-center gap-1.5 font-space text-[11px] uppercase font-black"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};
