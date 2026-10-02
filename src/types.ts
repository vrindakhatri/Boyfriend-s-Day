export interface StoryData {
  partner1Name: string;
  partner2Name: string;
  partner1Initial: string;
  partner2Initial: string;
  anniversaryDate: string;
  year: string;
  hoursTogether: string;
  minutesTogether: string;
  breakdown: {
    pureYappingHours: string;
    heartFullMomentsHours: string;
    lateNightOverthinkingHours: string;
    sharedBraincellsHours: string;
  };
  topSong: {
    title: string;
    artist: string;
    plays: number;
    quote: string;
    duration: string;
  };
  topGenre: string;
  subGenre: string;
  topVibes: string[];
  personalityTitle: string;
  personalityDesc: string;
  personalityTraits: Array<{
    label: string;
    tag: string;
    color: string;
  }>;
  top5Moments: Array<{
    rank: number;
    title: string;
    tag: string;
    plays: number;
    color: string;
    icon: string;
  }>;
  photoMemories: Array<{
    label: string;
    title: string;
    image: string;
    note: string;
  }>;
}
