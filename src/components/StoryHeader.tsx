import React from 'react';
import { Volume2, VolumeX, SlidersHorizontal } from 'lucide-react';

interface StoryHeaderProps {
  currentSlide: number;
  totalSlides: number;
  progressPercent: number; // 0 to 100 for active slide
  title: string;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
  onOpenCustomizer: () => void;
  onCloseStory?: () => void;
  onSelectSlide: (index: number) => void;
}

export const StoryHeader: React.FC<StoryHeaderProps> = ({
  currentSlide,
  totalSlides,
  progressPercent,
  title,
  isMusicPlaying,
  onToggleMusic,
  onOpenCustomizer,
  onCloseStory,
  onSelectSlide,
}) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-2 px-3 pb-1 bg-gradient-to-b from-[#131313]/90 via-[#131313]/60 to-transparent backdrop-blur-sm select-none">
      {/* 9-Segment Story Progress Bar */}
      <div
        aria-label="Story Progress"
        className="flex items-center gap-1 w-full pt-1 pb-2 cursor-pointer"
      >
        {Array.from({ length: totalSlides }).map((_, idx) => {
          let fillWidth = '0%';
          if (idx < currentSlide) fillWidth = '100%';
          else if (idx === currentSlide) fillWidth = `${progressPercent}%`;

          return (
            <div
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                onSelectSlide(idx);
              }}
              className="h-1 flex-1 rounded-full bg-white/25 overflow-hidden relative transition-all"
              title={`Jump to slide ${idx + 1}`}
            >
              <div
                className="h-full bg-[#B6F500] rounded-full transition-all duration-100 ease-linear"
                style={{ width: fillWidth }}
              />
            </div>
          );
        })}
      </div>

      {/* Header controls & title */}
      <div className="flex items-center justify-between w-full h-11">
        {/* Left: Spotify style wrapped icon + Slide title */}
        <div className="flex items-center gap-2">
          <img
            alt="Spotify Style Wrapped Icon"
            className="h-7 w-7 object-contain rounded-sm"
            src="https://lh3.googleusercontent.com/aida/AEtjO1Vf4Zaufn1yr1MOOCptxd5Pt-PGdJm1n_MCQC_CT-XTKppichMH0wnbN13k1kYeYtOWM8nO-10TBeLrB4OTXfFW8oQgcivOPN1WeEMHeSNcP9iPN2j9kRmMQTzDel-hKGdgchEjkXSiF0kq6NEYmUod4IZT4c94H2oJ3_G3VS4e8mWP4mZsfFB1zShk7QCvaMY_ZC9uDII0LCpSR-LtHcJr8-vtSeDLxoCb1KcR3Ecb3ZSR8ah6VUsJpt4"
          />
          <span className="font-space font-semibold text-xs tracking-wider uppercase text-white drop-shadow-sm truncate max-w-[150px] sm:max-w-[200px]">
            {title}
          </span>
        </div>

        {/* Right actions: Audio Toggle, Customize, Profile */}
        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
          {/* Ambient Music Toggle */}
          <button
            onClick={onToggleMusic}
            title={isMusicPlaying ? 'Mute Music' : 'Play Ambient Music'}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors border ${
              isMusicPlaying
                ? 'bg-[#B6F500] text-[#131313] border-[#B6F500]'
                : 'bg-black/50 text-white/80 border-white/20 hover:text-white'
            }`}
          >
            {isMusicPlaying ? (
              <Volume2 className="w-4 h-4 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Personalize / Customize Data */}
          <button
            onClick={onOpenCustomizer}
            title="Customize Wrapped Data"
            className="w-8 h-8 rounded-full bg-black/50 text-white/90 border border-white/20 flex items-center justify-center hover:bg-black/80 hover:text-[#B6F500] transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>

          {/* Close or Overview trigger */}
          {onCloseStory && (
            <button
              onClick={onCloseStory}
              aria-label="Story Options"
              className="w-8 h-8 rounded-full bg-white text-[#131313] flex items-center justify-center hover:bg-[#B6F500] transition-colors"
              title="Overview & Settings"
            >
              <span className="material-symbols-outlined text-[16px] font-bold">person</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
