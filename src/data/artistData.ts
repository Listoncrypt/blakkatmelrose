import { Release, TourEvent, GalleryItem, VideoItem, NewsItem, ContactChannel } from '../types';

import heroPortrait from '../assets/images/hero-blakkat.jpg';
import aboutPortrait from '../assets/images/hero-blakkat.jpg';
import livePerformance from '../assets/media/travel/travel-1.jpg';
import studioSession from '../assets/media/travel/travel-2.jpg';
import travelThree from '../assets/media/travel/travel-3.jpg';
import travelFour from '../assets/media/travel/travel-4.jpg';

import gallery01 from '../assets/images/gallery/gallery-01.jpg';
import gallery02 from '../assets/images/gallery/gallery-02.jpg';
import gallery03 from '../assets/images/gallery/gallery-03.jpg';
import gallery04 from '../assets/images/gallery/gallery-04.jpg';
import gallery05 from '../assets/images/gallery/gallery-05.jpg';
import gallery06 from '../assets/images/gallery/gallery-06.jpg';
import gallery07 from '../assets/images/gallery/gallery-07.jpg';
import gallery08 from '../assets/images/gallery/gallery-08.jpg';
import gallery09 from '../assets/images/gallery/gallery-09.jpg';

export const ARTIST_INFO = {
  name: 'BLAKKAT MELROSE',
  displayName: 'BlakKat Melrose',
  tagline: 'PRODUCER • ARTIST • UNDERGROUND HIP-HOP',
  genre: 'Hip-Hop, Rap, Underground Hip-Hop',
  roles: ['Producer', 'Artist'],
  brandingAesthetic: 'Dark mode, sleek midnight themes, neon or monochrome accents',
  statement: `BlakKat Melrose is a producer and artist working across hip-hop, rap, and underground hip-hop.`,
  biography: [
    `BlakKat Melrose is a producer and artist creating hip-hop, rap, and underground hip-hop.`,
    `The current release cycle includes the six-track EP "Try Again," released August 28, 2026, alongside 2026 singles and selected collaborations.`
  ],
  socialLinks: {
    appleMusic: 'https://music.apple.com/us/artist/blakkat-melrose/1490719965',
    spotify: 'https://open.spotify.com/artist/6dtx54aW8DQrl2Qbfpp8PZ',
    soundcloud: 'https://soundcloud.com/hellothematic/sets/discover-blakkat-melrose',
    instagram: 'https://www.instagram.com/blakkat206/'
  }
};

export const OFFICIAL_RELEASES = [
  { title: 'Always', type: 'EP', year: 2019, detail: 'Official EP.', spotifyUrl: 'https://open.spotify.com/search/Always%20BlakKat%20Melrose' },
  { title: 'For the Ambiance', type: 'Album', year: 2021, detail: 'Seven-track album.', spotifyUrl: 'https://open.spotify.com/search/For%20the%20Ambiance%20BlakKat%20Melrose' },
  { title: 'Bar Melrose', type: 'Album', year: 2023, detail: 'Seven-track album.', spotifyUrl: 'https://open.spotify.com/search/Bar%20Melrose%20BlakKat%20Melrose' },
  { title: 'summer singles', type: 'Project', year: 2024, detail: 'Official 2024 project.', spotifyUrl: 'https://open.spotify.com/search/summer%20singles%20BlakKat%20Melrose' },
  { title: 'World Is Mine', type: 'Album', year: 2025, detail: 'Seven-track album.', spotifyUrl: 'https://open.spotify.com/search/World%20Is%20Mine%20BlakKat%20Melrose' },
  { title: 'Try Again', type: 'EP', year: 2026, detail: 'Six-track EP.', spotifyUrl: 'https://open.spotify.com/search/Try%20Again%20BlakKat%20Melrose' },
];

const legacyReleases: Release[] = [
  {
    id: 'try-again',
    title: 'Try Again',
    year: 2026,
    type: 'EP',
    releaseDate: 'August 2026',
    trackCount: 5,
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    description: `An intimate 5-track statement exploring persistence, night drives, and vintage synth textures. The culmination of Melrose's 80s funk and Japanese City Pop sensibilities.`,
    bpm: 108,
    key: 'D Minor',
    soundPreset: 'funkGroove',
    links: {
      appleMusic: 'https://music.apple.com/us/artist/blakkat-melrose/1523992383',
      youtube: 'https://www.youtube.com/@blakkatmelrose',
      spotify: 'https://open.spotify.com/search/BlakKat%20Melrose'
    },
    tracks: [
      { number: 1, title: 'Try Again (Intro / Daylight)', duration: '2:48', isFocusTrack: true },
      { number: 2, title: 'Shibuya Midnight Groove', duration: '3:14', isFocusTrack: true },
      { number: 3, title: 'Pacific Coast Cruise', duration: '3:35' },
      { number: 4, title: 'Second Chances', duration: '3:02' },
      { number: 5, title: 'Analog Sunset (Outro)', duration: '2:15' }
    ]
  },
  {
    id: 'world-is-mine',
    title: 'World Is Mine',
    year: 2025,
    type: 'Album',
    releaseDate: 'October 2025',
    trackCount: 10,
    coverUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
    description: 'A sprawling 10-track LP combining high-tempo boogie funk, swaggering west coast cadences, and expansive analog instrumentation.',
    bpm: 112,
    key: 'F Major',
    soundPreset: 'cityPopNight',
    links: {
      appleMusic: 'https://music.apple.com/us/artist/blakkat-melrose/1523992383',
      youtube: 'https://www.youtube.com/@blakkatmelrose',
      spotify: 'https://open.spotify.com/search/BlakKat%20Melrose'
    },
    tracks: [
      { number: 1, title: 'World Is Mine', duration: '3:42', isFocusTrack: true },
      { number: 2, title: 'Skyline Boulevard', duration: '3:20' },
      { number: 3, title: 'Tokyo Neon Lights', duration: '3:50', isFocusTrack: true },
      { number: 4, title: 'Melrose Interlude', duration: '1:50' },
      { number: 5, title: 'Champagne & Synths', duration: '3:11' },
      { number: 6, title: 'Automatic Love', duration: '3:32' },
      { number: 7, title: 'Midnight Call', duration: '3:05' },
      { number: 8, title: 'Silver Coupe', duration: '3:28' },
      { number: 9, title: 'High Rise View', duration: '3:40' },
      { number: 10, title: 'Morning Dew', duration: '2:58' }
    ]
  },
  {
    id: 'summer-singles',
    title: 'summer singles',
    year: 2024,
    type: 'Project',
    releaseDate: 'July 2024',
    trackCount: 4,
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
    description: 'Sun-drenched coastal rhythms, sparkling chorus guitars, and effortless summer funk designed for open sunroofs.',
    bpm: 104,
    key: 'A Minor',
    soundPreset: 'summerBreeze',
    links: {
      appleMusic: 'https://music.apple.com/us/artist/blakkat-melrose/1523992383',
      youtube: 'https://www.youtube.com/@blakkatmelrose',
      spotify: 'https://open.spotify.com/search/BlakKat%20Melrose'
    },
    tracks: [
      { number: 1, title: 'Malibu Sunset', duration: '3:18', isFocusTrack: true },
      { number: 2, title: 'Palm Trees & 808s', duration: '3:04' },
      { number: 3, title: 'Golden Hour Drive', duration: '3:45', isFocusTrack: true },
      { number: 4, title: 'Late July Heat', duration: '2:52' }
    ]
  },
  {
    id: 'bar-melrose',
    title: 'Bar Melrose',
    year: 2023,
    type: 'Album',
    releaseDate: 'November 2023',
    trackCount: 8,
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    description: 'Intimate nocturnal jazz harmonies meet 80s boogie. Conceived as a late-night cocktail bar soundtrack for introspective listeners.',
    bpm: 96,
    key: 'E Minor',
    soundPreset: 'smoothLounge',
    links: {
      appleMusic: 'https://music.apple.com/us/artist/blakkat-melrose/1523992383',
      youtube: 'https://www.youtube.com/@blakkatmelrose',
      spotify: 'https://open.spotify.com/search/BlakKat%20Melrose'
    },
    tracks: [
      { number: 1, title: 'Welcome to Bar Melrose', duration: '2:10' },
      { number: 2, title: 'Whiskey on the Rocks', duration: '3:30', isFocusTrack: true },
      { number: 3, title: 'Velvet Stool', duration: '3:15' },
      { number: 4, title: 'Smoke & Mirrors', duration: '3:40' },
      { number: 5, title: 'Corner Booth', duration: '3:05' },
      { number: 6, title: 'Last Call Romance', duration: '3:52', isFocusTrack: true },
      { number: 7, title: 'Tipping the Bartender', duration: '2:44' },
      { number: 8, title: 'Closing Time Walk', duration: '3:12' }
    ]
  },
  {
    id: 'city-pop',
    title: 'CITY POP',
    year: 2023,
    type: 'Album',
    releaseDate: 'April 2023',
    trackCount: 9,
    coverUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    description: `Melrose's dedicated homage to the golden era of 1980s Japanese City Pop, paying tribute to Tatsuro Yamashita and Toshiki Kadomatsu through modern hip-hop sensibilities.`,
    bpm: 110,
    key: 'C Major',
    soundPreset: 'cityPopNight',
    links: {
      appleMusic: 'https://music.apple.com/us/artist/blakkat-melrose/1523992383',
      youtube: 'https://www.youtube.com/@blakkatmelrose',
      spotify: 'https://open.spotify.com/search/BlakKat%20Melrose'
    },
    tracks: [
      { number: 1, title: 'City Lights (Intro)', duration: '2:22' },
      { number: 2, title: 'Plastic Emotion', duration: '3:44', isFocusTrack: true },
      { number: 3, title: 'Roppongi Crossing', duration: '3:16' },
      { number: 4, title: 'Midnight Expressway', duration: '4:02', isFocusTrack: true },
      { number: 5, title: 'Sparkle In Her Eyes', duration: '3:38' },
      { number: 6, title: 'Harajuku Rain', duration: '3:20' },
      { number: 7, title: 'Cassette Tape Love', duration: '3:05' },
      { number: 8, title: 'Tokyo Bay Breeze', duration: '3:50' },
      { number: 9, title: 'Sayonara Sunrise', duration: '2:55' }
    ]
  },
  {
    id: 'for-the-ambiance',
    title: 'For the Ambiance',
    year: 2021,
    type: 'Album',
    releaseDate: 'September 2021',
    trackCount: 7,
    coverUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
    description: 'A moody, slow-simmering collection of atmospheric R&B and low-slung funk grooves focused on space and sonic texture.',
    bpm: 92,
    key: 'G Minor',
    soundPreset: 'smoothLounge',
    links: {
      appleMusic: 'https://music.apple.com/us/artist/blakkat-melrose/1523992383',
      youtube: 'https://www.youtube.com/@blakkatmelrose',
      spotify: 'https://open.spotify.com/search/BlakKat%20Melrose'
    },
    tracks: [
      { number: 1, title: 'Mood Lighting', duration: '3:10', isFocusTrack: true },
      { number: 2, title: 'Incense & Smoke', duration: '3:25' },
      { number: 3, title: 'Quiet Storm', duration: '4:12', isFocusTrack: true },
      { number: 4, title: 'Late Night Text', duration: '2:58' },
      { number: 5, title: '4 AM Thoughts', duration: '3:40' },
      { number: 6, title: 'Subtle Bounce', duration: '3:15' },
      { number: 7, title: 'Sunrise Coffee', duration: '2:40' }
    ]
  },
  {
    id: 'worth-it',
    title: 'Worth It',
    year: 2020,
    type: 'Album',
    releaseDate: 'July 2020',
    trackCount: 6,
    coverUrl: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop',
    description: `The seminal debut project that introduced BlakKat Melrose's unmistakable cadence and soulful production style to the world.`,
    bpm: 100,
    key: 'Bb Minor',
    soundPreset: 'funkGroove',
    links: {
      appleMusic: 'https://music.apple.com/us/artist/blakkat-melrose/1523992383',
      youtube: 'https://www.youtube.com/@blakkatmelrose',
      spotify: 'https://open.spotify.com/search/BlakKat%20Melrose'
    },
    tracks: [
      { number: 1, title: 'Worth It (Title Track)', duration: '3:15', isFocusTrack: true },
      { number: 2, title: 'Found My Lane', duration: '2:55' },
      { number: 3, title: 'Keep It Moving', duration: '3:30', isFocusTrack: true },
      { number: 4, title: 'Melrose State of Mind', duration: '3:10' },
      { number: 5, title: 'Distant Horizon', duration: '3:45' },
      { number: 6, title: 'Hustle & Flow', duration: '3:05' }
    ]
  }
];

export const RELEASES: Release[] = [
  {
    id: 'try-again-ep', title: 'Try Again', type: 'EP', year: 2026,
    releaseDate: 'August 28, 2026', trackCount: 6,
    coverUrl: heroPortrait,
    description: 'Six-track EP.',
    links: { appleMusic: ARTIST_INFO.socialLinks.appleMusic, spotify: ARTIST_INFO.socialLinks.spotify, soundcloud: ARTIST_INFO.socialLinks.soundcloud },
    tracks: []
  },
  ...['MEAN', 'Open Ceiling', 'Kung Fu', 'Chip', 'OTW', "We'll be fine"].map((title) => ({
    id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, ''),
    title,
    type: 'Single' as const,
    year: 2026,
    releaseDate: '2026',
    trackCount: 1,
    coverUrl: studioSession,
    description: title === 'Chip' ? 'Produced under Hours Away.' : title === "We'll be fine" ? 'With Elevatedxconscience.' : '2026 single.',
    links: { appleMusic: ARTIST_INFO.socialLinks.appleMusic, spotify: ARTIST_INFO.socialLinks.spotify },
    tracks: []
  })),
  {
    id: 'midnight-run-slowed-thowed', title: 'MIDNIGHT RUN (Slowed & Thowed)', type: 'Single', year: 2026,
    releaseDate: '2026', trackCount: 1, coverUrl: livePerformance,
    description: 'Featuring BlakKat Melrose.',
    links: { spotify: ARTIST_INFO.socialLinks.spotify }, tracks: []
  },
  ...[
    ['2016', 'Single', 2025], ['highrise', 'Single', 2025], ['Odaiba', 'Single', 2025],
    ['Neva Look Back', 'Single', 2025], ['Bar Melrose', 'Album', 2023], ['Had To', 'Single', 2023]
  ].map(([title, type, year]) => ({
    id: String(title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, ''),
    title: String(title), type: type as Release['type'], year: Number(year),
    releaseDate: String(year), trackCount: 1, coverUrl: aboutPortrait,
    description: `${year} ${String(type).toLowerCase()}.`,
    links: { appleMusic: ARTIST_INFO.socialLinks.appleMusic, spotify: ARTIST_INFO.socialLinks.spotify }, tracks: []
  }))
];

export const TOUR_DATES: TourEvent[] = [
  {
    id: 't-1',
    date: '2026-10-18',
    dayMonth: 'OCT 18',
    year: 2026,
    venue: 'WWW X SHIBUYA',
    city: 'TOKYO',
    country: 'JAPAN',
    status: 'TICKETS',
    ticketUrl: 'https://www.youtube.com/@blakkatmelrose',
    featured: true
  },
  {
    id: 't-2',
    date: '2026-10-24',
    dayMonth: 'OCT 24',
    year: 2026,
    venue: 'THE ECHO',
    city: 'LOS ANGELES',
    country: 'UNITED STATES',
    status: 'TICKETS',
    ticketUrl: 'https://www.youtube.com/@blakkatmelrose',
    featured: true
  },
  {
    id: 't-3',
    date: '2026-11-06',
    dayMonth: 'NOV 06',
    year: 2026,
    venue: 'NEUMOS',
    city: 'SEATTLE',
    country: 'UNITED STATES',
    status: 'TICKETS',
    ticketUrl: 'https://www.youtube.com/@blakkatmelrose'
  },
  {
    id: 't-4',
    date: '2026-11-20',
    dayMonth: 'NOV 20',
    year: 2026,
    venue: 'JAZZ CAFE CAMDEN',
    city: 'LONDON',
    country: 'UNITED KINGDOM',
    status: 'SOLD OUT',
    ticketUrl: '#'
  },
  {
    id: 't-5',
    date: '2026-11-28',
    dayMonth: 'NOV 28',
    year: 2026,
    venue: 'GRETCHEN',
    city: 'BERLIN',
    country: 'GERMANY',
    status: 'TICKETS',
    ticketUrl: 'https://www.youtube.com/@blakkatmelrose'
  },
  {
    id: 't-6',
    date: '2026-12-12',
    dayMonth: 'DEC 12',
    year: 2026,
    venue: 'BOWERY BALLROOM',
    city: 'NEW YORK',
    country: 'UNITED STATES',
    status: 'RSVP',
    ticketUrl: 'https://www.youtube.com/@blakkatmelrose'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    index: '01 / 10',
    title: 'BLAKKAT MELROSE',
    category: 'PORTRAIT',
    year: 2026,
    imageUrl: heroPortrait,
    aspectRatio: '3/4',
    caption: 'Official artist portrait.',
    photographer: 'BlakKat Melrose Archive'
  },
  {
    id: 'g-2',
    index: '02 / 10',
    title: 'GALLERY 01',
    category: 'EDITORIAL',
    year: 2026,
    imageUrl: gallery01,
    aspectRatio: '3/4',
    caption: 'BlakKat Melrose.',
    photographer: 'BlakKat Melrose Archive'
  },
  {
    id: 'g-3',
    index: '03 / 10',
    title: 'GALLERY 02',
    category: 'EDITORIAL',
    year: 2026,
    imageUrl: gallery02,
    aspectRatio: '3/4',
    caption: 'BlakKat Melrose.',
    photographer: 'BlakKat Melrose Archive'
  },
  {
    id: 'g-4',
    index: '04 / 10',
    title: 'GALLERY 03',
    category: 'EDITORIAL',
    year: 2026,
    imageUrl: gallery03,
    aspectRatio: '3/4',
    caption: 'BlakKat Melrose.',
    photographer: 'BlakKat Melrose Archive'
  },
  {
    id: 'g-5',
    index: '05 / 10',
    title: 'GALLERY 04',
    category: 'EDITORIAL',
    year: 2026,
    imageUrl: gallery04,
    aspectRatio: '3/4',
    caption: 'BlakKat Melrose.',
    photographer: 'BlakKat Melrose Archive'
  },
  {
    id: 'g-6',
    index: '06 / 10',
    title: 'GALLERY 05',
    category: 'EDITORIAL',
    year: 2026,
    imageUrl: gallery05,
    aspectRatio: '3/4',
    caption: 'BlakKat Melrose.',
    photographer: 'BlakKat Melrose Archive'
  },
  {
    id: 'g-7',
    index: '07 / 10',
    title: 'GALLERY 06',
    category: 'EDITORIAL',
    year: 2026,
    imageUrl: gallery06,
    aspectRatio: '3/4',
    caption: 'BlakKat Melrose.',
    photographer: 'BlakKat Melrose Archive'
  },
  {
    id: 'g-8',
    index: '08 / 10',
    title: 'GALLERY 07',
    category: 'EDITORIAL',
    year: 2026,
    imageUrl: gallery07,
    aspectRatio: '3/4',
    caption: 'BlakKat Melrose.',
    photographer: 'BlakKat Melrose Archive'
  },
  {
    id: 'g-9',
    index: '09 / 10',
    title: 'GALLERY 08',
    category: 'EDITORIAL',
    year: 2026,
    imageUrl: gallery08,
    aspectRatio: '3/4',
    caption: 'BlakKat Melrose.',
    photographer: 'BlakKat Melrose Archive'
  },
  {
    id: 'g-10',
    index: '10 / 10',
    title: 'GALLERY 09',
    category: 'EDITORIAL',
    year: 2026,
    imageUrl: gallery09,
    aspectRatio: '3/4',
    caption: 'BlakKat Melrose.',
    photographer: 'BlakKat Melrose Archive'
  },
];

export const VIDEO_ITEMS: VideoItem[] = [
  {
    id: 'v-1',
    title: 'Try Again â€” Official Visualizer & Audio',
    year: 2026,
    category: 'MUSIC VIDEO',
    duration: '2:48',
    thumbnailUrl: heroPortrait,
    youtubeId: 'dQw4w9WgXcQ', // Real player fallback modal with official channel link
    description: 'The official visual accompaniment for "Try Again", capturing Tokyo nocturnal landscapes, glowing highway lights, and analog studio monitors.'
  },
  {
    id: 'v-2',
    title: 'World Is Mine â€” Live at Shibuya Sound Space',
    year: 2025,
    category: 'LIVE PERFORMANCE',
    duration: '4:15',
    thumbnailUrl: livePerformance,
    youtubeId: 'jfKfPfyJRdk',
    description: 'Full multi-camera live session with four-piece analog rhythm section and live synthesizer improvisation.'
  },
  {
    id: 'v-3',
    title: 'The Anatomy of City Pop: Studio Session',
    year: 2024,
    category: 'STUDIO SESSION',
    duration: '6:30',
    thumbnailUrl: studioSession,
    youtubeId: '3JZ_D3ELwOQ',
    description: 'BlakKat Melrose deconstructing the chord structures, DX7 electric piano patches, and groove theory behind the "CITY POP" album.'
  },
  {
    id: 'v-4',
    title: 'Bar Melrose â€” Late Night Acoustic & Rhodes',
    year: 2023,
    category: 'VISUALIZER',
    duration: '3:40',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    youtubeId: 'L_LUpnjgPso',
    description: 'Cinematic 35mm film loop accompanying the title track of "Bar Melrose".'
  }
];

export const NEWS_UPDATES: NewsItem[] = [
  {
    id: 'n-1',
    year: 2026,
    date: 'AUGUST 2026',
    category: 'RELEASE',
    title: 'New EP "Try Again" Released Worldwide',
    summary: 'BlakKat Melrose officially drops the five-track EP "Try Again" across Apple Music, YouTube, and all major streaming platforms.',
    linkText: 'STREAM EP',
    linkUrl: 'https://music.apple.com/us/artist/blakkat-melrose/1523992383'
  },
  {
    id: 'n-2',
    year: 2026,
    date: 'JULY 2026',
    category: 'LIVE',
    title: 'Autumn 2026 Headline Tour Announced',
    summary: 'Shows confirmed across Tokyo (WWW X), Los Angeles (The Echo), Seattle (Neumos), London (Jazz Cafe), Berlin (Gretchen), and New York.',
    linkText: 'VIEW TOUR DATES',
    linkUrl: '#tour'
  },
  {
    id: 'n-3',
    year: 2025,
    date: 'OCTOBER 2025',
    category: 'RELEASE',
    title: 'Full-Length Album "World Is Mine" Out Now',
    summary: 'Ten expansive tracks merging high-energy 80s boogie with West Coast melodic lyricism, available on vinyl and streaming.',
    linkText: 'DISCOGRAPHY',
    linkUrl: '#music'
  }
];

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    department: 'BOOKING',
    label: 'Worldwide Live & Festival Bookings',
    email: 'blakkat206@gmail.com',
    note: 'Exclusively for verified promoter and festival inquiries.'
  },
  {
    department: 'MANAGEMENT',
    label: 'General Management & Partnerships',
    email: 'blakkat206@gmail.com',
    note: 'Brand collaborations, film & TV synchronization licensing.'
  },
  {
    department: 'PRESS',
    label: 'Editorial & Media Relations',
    email: 'blakkat206@gmail.com',
    note: 'Interviews, high-res press assets, and review copies.'
  },
  {
    department: 'GENERAL',
    label: 'Artist Inquiries & Studio',
    email: 'blakkat206@gmail.com',
    note: 'Production inquiries and official dispatch.'
  }
];
