export type ReleaseType = 'Album' | 'EP' | 'Single' | 'Project';

export interface Track {
  number: number;
  title: string;
  duration: string;
  isFocusTrack?: boolean;
}

export interface StreamingLinks {
  appleMusic?: string;
  spotify?: string;
  youtube?: string;
  tidal?: string;
  soundcloud?: string;
}

export interface SocialLinks {
  appleMusic?: string;
  spotify?: string;
  soundcloud?: string;
  instagram?: string;
}

export interface Release {
  id: string;
  title: string;
  year: number;
  type: ReleaseType;
  coverUrl: string;
  releaseDate: string;
  trackCount: number;
  description: string;
  links: StreamingLinks;
  tracks: Track[];
  bpm?: number;
  key?: string;
  soundPreset?: 'funkGroove' | 'cityPopNight' | 'smoothLounge' | 'summerBreeze';
}

export type TourStatus = 'TICKETS' | 'SOLD OUT' | 'RSVP' | 'SOON';

export interface TourEvent {
  id: string;
  date: string;
  dayMonth: string;
  year: number;
  venue: string;
  city: string;
  country: string;
  status: TourStatus;
  ticketUrl: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  index: string;
  title: string;
  category: 'EDITORIAL' | 'LIVE' | 'STUDIO' | 'ARCHIVE';
  year: number;
  imageUrl: string;
  aspectRatio: string;
  caption: string;
  photographer?: string;
  location?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  year: number;
  category: 'MUSIC VIDEO' | 'LIVE PERFORMANCE' | 'STUDIO SESSION' | 'VISUALIZER';
  duration: string;
  thumbnailUrl: string;
  youtubeId: string;
  description: string;
}

export interface NewsItem {
  id: string;
  year: number;
  date: string;
  category: 'RELEASE' | 'LIVE' | 'PRESS' | 'ARCHIVE';
  title: string;
  summary: string;
  linkText?: string;
  linkUrl?: string;
}

export interface ContactChannel {
  department: 'BOOKING' | 'MANAGEMENT' | 'PRESS' | 'GENERAL';
  label: string;
  email: string;
  note: string;
}

export interface AudioPlayerState {
  isPlaying: boolean;
  currentTrackTitle: string;
  currentReleaseTitle: string;
  currentReleaseYear: number;
  coverUrl: string;
  currentTime: number;
  duration: number;
  volume: number;
  preset: string;
}
