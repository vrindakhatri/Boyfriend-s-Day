import { StoryData } from './types';
import leftMemoryImage from './assets/images/photo1.jpeg';
import topVibeImage from './assets/images/photo2.jpeg';
import rightMemoryImage from './assets/images/right-memory.jpeg';

export const initialStoryData: StoryData = {
  partner1Name: 'Induu',
  partner2Name: 'Dory',
  partner1Initial: 'I',
  partner2Initial: 'D',
  anniversaryDate: '21.09.2025',
  year: '2026',
  hoursTogether: '9,048',
  minutesTogether: '542,880',
  breakdown: {
    pureYappingHours: '2,800',
    heartFullMomentsHours: '2,200',
    lateNightOverthinkingHours: '2,000',
    sharedBraincellsHours: '2,048',
  },
  topSong: {
    title: 'Tere Saath',
    artist: 'maahi, Kalki, Dheerendra Gautam',
    plays: 377,
    duration: '3:14',
    quote: 'The night we drove around singing every single lyric off-key until 3 AM.',
  },
  topGenre: 'COMFORT',
  subGenre: 'BEING MY PERSON',
  topVibes: ['FOREHEAD KISSES', 'LAUGHTER ATTACK', 'ENDLESS BIKE RIDES'],
  personalityTitle: '100% POWERED BY GHEE PODI AND LOVE',
  personalityDesc: 'Fueling our relationship with spice, extra ghee, and infinite good vibes.',
  personalityTraits: [
    { label: 'Long, warm hugs', tag: 'UNLIMITED', color: '#B6F500' },
    { label: 'Feeds big bites', tag: 'TAXED', color: '#B49BC8' },
    { label: 'Soft dosa only', tag: 'APPROVED', color: '#FF4FA3' },
  ],
  top5Moments: [
    {
      rank: 1,
      title: 'Your kisses',
      tag: 'TOP OBSESSION',
      plays: 847,
      color: '#B6F500',
      icon: 'favorite',
    },
    {
      rank: 2,
      title: 'Your laugh',
      tag: 'UNMATCHED SEROTONIN',
      plays: 760,
      color: '#FF4FA3',
      icon: 'mood',
    },
    {
      rank: 3,
      title: 'Piteu piteu',
      tag: 'LIVE VERSION',
      plays: 612,
      color: '#FFD7E3',
      icon: 'two_wheeler',
    },
    {
      rank: 4,
      title: 'Your hugs',
      tag: 'INSTANT COMFORT',
      plays: 499,
      color: '#B6F500',
      icon: 'volunteer_activism',
    },
    {
      rank: 5,
      title: 'Unmatched patience with me',
      tag: 'HALL OF FAME',
      plays: 377,
      color: '#02B04C',
      icon: 'hourglass_empty',
    },
  ],
  photoMemories: [
    {
      label: 'Track 01',
      title: 'matching-matching',
      image: leftMemoryImage,
      note: '',
    },
    {
      label: 'Top Vibe',
      title: 'I + D Forever',
      image: topVibeImage,
      note: '⭐',
    },
    {
      label: 'Encore',
      title: 'us as fruits ;)',
      image: rightMemoryImage,
      note: '❇️',
    },
  ],
};
