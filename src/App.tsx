import React, { useState, useEffect, useRef, useCallback } from 'react';
import { initialStoryData } from './defaultData';
import { StoryData } from './types';
import { StoryHeader } from './components/StoryHeader';
import { StoryFooter } from './components/StoryFooter';
import { Screen1Intro } from './components/screens/Screen1Intro';
import { Screen2Minutes } from './components/screens/Screen2Minutes';
import { Screen3InsideJokes } from './components/screens/Screen3InsideJokes';
import { Screen4Aura } from './components/screens/Screen4Aura';
import { Screen5Personality } from './components/screens/Screen5Personality';
import { Screen6Collab } from './components/screens/Screen6Collab';
import { Screen7TopMoments } from './components/screens/Screen7TopMoments';
import { Screen8ArtistOfTheYear } from './components/screens/Screen8ArtistOfTheYear';
import { Screen9Finale } from './components/screens/Screen9Finale';
import { ShareModal } from './components/ShareModal';
import { CustomizerModal } from './components/CustomizerModal';
import { StoryOverviewModal } from './components/StoryOverviewModal';
import { sound } from './utils/audio';

const slideTitles = [
  'WRAPPED INTRO',
  'MINUTES TOGETHER',
  'TOP TRACKS',
  'RELATIONSHIP AURA',
  'MINE',
  'LISTENER ARCHETYPE',
  'TOP SONGS SHARED',
  'PHOTO HIGHLIGHTS',
  'RETROSPECTIVE FINALE',
];

const SLIDE_DURATION_MS = 7500;
const STORAGE_KEY = 'our_wrapped_data_2026';
const personalityTraitTags: Record<string, string> = {
  'long, warm hugs': 'UNLIMITED',
  'feeds big bites': 'TAXED',
  'soft dosa only': 'APPROVED',
};

export default function App() {
  // Load persisted data or default
  const [data, setData] = useState<StoryData>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const savedData = JSON.parse(saved) as StoryData;
          const savedTopSong =
            savedData.topSong.title === 'Double Take'
              ? {
                  ...savedData.topSong,
                  title: initialStoryData.topSong.title,
                  artist: initialStoryData.topSong.artist,
                  plays: initialStoryData.topSong.plays,
                }
              : savedData.topSong;
            const savedRecipient =
              savedData.partner2Name === 'Achyut' && savedData.partner2Initial === 'A'
                ? {
                    name: initialStoryData.partner2Name,
                    initial: initialStoryData.partner2Initial,
                  }
                : { name: savedData.partner2Name, initial: savedData.partner2Initial };
          const isLegacyDefaultCouple =
            savedData.partner1Name === 'Val' &&
            savedData.partner1Initial === 'V' &&
            savedData.partner2Name === 'A' &&
            savedData.partner2Initial === 'A';

          if (isLegacyDefaultCouple) {
            return {
              ...savedData,
              personalityTraits: savedData.personalityTraits.map((trait) => ({
                ...trait,
                tag: personalityTraitTags[trait.label.trim().toLowerCase()] ?? trait.tag,
              })),
              partner1Name: initialStoryData.partner1Name,
              partner2Name: initialStoryData.partner2Name,
              partner1Initial: initialStoryData.partner1Initial,
              partner2Initial: initialStoryData.partner2Initial,
              hoursTogether:
                savedData.hoursTogether === '8,760'
                  ? initialStoryData.hoursTogether
                  : savedData.hoursTogether,
              minutesTogether:
                savedData.minutesTogether === '49,474'
                  ? initialStoryData.minutesTogether
                  : savedData.minutesTogether,
              breakdown: initialStoryData.breakdown,
              topVibes: initialStoryData.topVibes,
              topSong: {
                ...savedTopSong,
                artist:
                  savedTopSong.artist === 'Dhruv · Our Song (A & V Edit)'
                    ? initialStoryData.topSong.artist
                    : savedTopSong.artist,
              },
              photoMemories: savedData.photoMemories.map((memory) =>
                memory.title === 'V + A Forever'
                  ? { ...memory, title: 'I + A Forever' }
                  : memory,
              ),
            };
          }

          return {
            ...savedData,
            personalityTraits: savedData.personalityTraits.map((trait) => ({
              ...trait,
              tag: personalityTraitTags[trait.label.trim().toLowerCase()] ?? trait.tag,
            })),
            partner2Name: savedRecipient.name,
            partner2Initial: savedRecipient.initial,
            topSong: savedTopSong,
            breakdown: initialStoryData.breakdown,
            topVibes: initialStoryData.topVibes,
          };
        }
      } catch {}
    }
    return initialStoryData;
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // Modals
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  const timerRef = useRef<any>(null);
  const startTimeRef = useRef<number>(Date.now());
  const elapsedBeforePauseRef = useRef<number>(0);

  const totalSlides = slideTitles.length;

  const goToSlide = useCallback((index: number) => {
    sound.playSlideSound();
    setCurrentSlide(Math.max(0, Math.min(totalSlides - 1, index)));
    setProgressPercent(0);
    elapsedBeforePauseRef.current = 0;
    startTimeRef.current = Date.now();
  }, [totalSlides]);

  const handleNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    } else {
      // Reached end, pause or stay on finale
      setProgressPercent(100);
    }
  }, [currentSlide, totalSlides, goToSlide]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    } else {
      setProgressPercent(0);
      startTimeRef.current = Date.now();
      elapsedBeforePauseRef.current = 0;
    }
  }, [currentSlide, goToSlide]);

  // Story Timer
  useEffect(() => {
    if (isPaused || isShareOpen || isCustomizerOpen || isOverviewOpen) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    startTimeRef.current = Date.now() - elapsedBeforePauseRef.current;

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(100, (elapsed / SLIDE_DURATION_MS) * 100);
      setProgressPercent(pct);

      if (elapsed >= SLIDE_DURATION_MS) {
        if (currentSlide < totalSlides - 1) {
          handleNext();
        } else {
          // Stay on finale
          setProgressPercent(100);
          if (timerRef.current) clearInterval(timerRef.current);
        }
      }
    }, 50);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSlide, isPaused, isShareOpen, isCustomizerOpen, isOverviewOpen, handleNext, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isCustomizerOpen || isShareOpen || isOverviewOpen) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'p' || e.key === 'P') {
        setIsPaused((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isCustomizerOpen, isShareOpen, isOverviewOpen]);

  // Handle half-screen story navigation.
  const handleContainerTap = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    if (clickX < rect.width / 2) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  // Hold to pause story
  const handlePointerDown = () => {
    setIsPaused(true);
    elapsedBeforePauseRef.current = Date.now() - startTimeRef.current;
  };

  const handlePointerUp = () => {
    setIsPaused(false);
  };

  // Save customized data
  const handleSaveData = (newData: StoryData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch {}
  };

  const handleResetData = () => {
    setData(initialStoryData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  // Toggle ambient synth music
  const handleToggleMusic = () => {
    sound.toggleMusic((playing) => setIsMusicPlaying(playing));
  };

  // Render current screen
  const renderCurrentScreen = () => {
    switch (currentSlide) {
      case 0:
        return <Screen1Intro data={data} onNext={handleNext} />;
      case 1:
        return <Screen2Minutes data={data} />;
      case 2:
        return <Screen3InsideJokes data={data} />;
      case 3:
        return <Screen4Aura data={data} />;
      case 4:
        return <Screen5Personality data={data} />;
      case 5:
        return <Screen6Collab data={data} />;
      case 6:
        return <Screen7TopMoments data={data} />;
      case 7:
        return <Screen8ArtistOfTheYear data={data} />;
      case 8:
        return (
          <Screen9Finale
            data={data}
            onReplay={() => goToSlide(0)}
            onShare={() => setIsShareOpen(true)}
          />
        );
      default:
        return <Screen1Intro data={data} onNext={handleNext} />;
    }
  };

  return (
    <main className="relative h-[100dvh] min-h-[100svh] w-full overflow-hidden bg-[#131313] select-none">
      <div className="relative h-full w-full flex flex-col overflow-hidden">
        {/* Story Progress and Header Bar */}
        <StoryHeader
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          progressPercent={progressPercent}
          title={slideTitles[currentSlide]}
          isMusicPlaying={isMusicPlaying}
          onToggleMusic={handleToggleMusic}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
          onCloseStory={() => setIsOverviewOpen(true)}
          onSelectSlide={goToSlide}
        />

        {/* Story Screen Content & Tap Interaction Wrapper */}
        <div
          onClick={handleContainerTap}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="relative w-full min-h-0 flex-1 overflow-hidden cursor-pointer"
        >
          {/* Active Screen */}
          {renderCurrentScreen()}

          {/* Invisible Left / Right Tap Zone visual guide indicator on hover */}
          <div className="absolute inset-0 pointer-events-none flex">
            <div className="w-1/2 h-full" title="Tap left to go back" />
            <div className="w-1/2 h-full" title="Tap right to continue" />
          </div>
        </div>

        {/* Story Footer Bar */}
        <StoryFooter
          partner1Initial={data.partner1Initial}
          partner2Initial={data.partner2Initial}
          onShare={() => setIsShareOpen(true)}
        />
      </div>

      {/* Modals */}
      <ShareModal
        data={data}
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />

      <CustomizerModal
        data={data}
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        onSave={handleSaveData}
        onReset={handleResetData}
      />

      <StoryOverviewModal
        data={data}
        isOpen={isOverviewOpen}
        currentSlide={currentSlide}
        onClose={() => setIsOverviewOpen(false)}
        onSelectSlide={goToSlide}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenShare={() => setIsShareOpen(true)}
      />
    </main>
  );
}
