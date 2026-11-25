/**
 * Every image below is hosted by Vowelites or is an official brand asset.
 * No stock photography is used, and no photo is presented as a campus it
 * does not belong to. Each entry records the gallery page it was published on.
 */
const BASE = 'https://vowelites.com/wp-content/uploads';

export const LOGO = `${BASE}/2022/11/VOWEL-2.png`;

export const IMAGES = {
  /* Homepage hero artwork: a morning arrival at a Vowel School campus, made for
     this site (see README, "Hero artwork"). Composed rather than documentary:
     it is not a photograph of any specific branch, so it is never captioned as
     one. Two derivatives so phones do not download the desktop file. */
  campusHero: {
    src: '/images/hero/vowel-school-arrival.jpg',
    srcMobile: '/images/hero/vowel-school-arrival-1280.jpg',
    width: 2400,
    height: 1340,
    alt: 'Children in school uniform walking to a sandstone entrance arch lettered "VOWEL SCHOOL", with a school van parked to the right and gardens behind',
    credit: 'Vowel School hero artwork'
  },
  /* Students seated at the Vowel School academic expo — published in the
     "G Vowel School" gallery. */
  assembly: {
    src: `${BASE}/2024/03/1708947824271.jpg`,
    alt: 'Students seated at an academic expo at Vowel School, Nellore',
    credit: 'Vowel School gallery'
  },
  /* Academic expo posters board — "G Vowel School" gallery. */
  expoBoard: {
    src: `${BASE}/2024/03/1708947824312-scaled.jpg`,
    alt: 'Science and academic project displays at a Vowel School expo',
    credit: 'Vowel School gallery'
  },
  /* Teaching faculty group photograph — "G Vowel 18 School" gallery. */
  faculty: {
    src: `${BASE}/2024/03/IMG_20240210_165643-scaled.jpg`,
    alt: 'Teachers of Vowel 18 CBSE School photographed together on campus',
    credit: 'Vowel 18 School gallery'
  },
  /* Institute principals, as published on the individual school profiles. */
  venu: {
    src: `${BASE}/2022/11/IMG_8405-1024x683-1.jpg`,
    alt: 'R. Venu, Chairman and Managing Director, at his desk at Vowel School',
    credit: 'Vowel School profile'
  },
  rafi: {
    src: `${BASE}/2024/02/IMG20240206150034-1024x768.jpg`,
    alt: 'Sk. Rafi, Principal of Vowel Secondary School, at his desk',
    credit: 'Vowel Secondary School profile'
  },
  modernLead: {
    src: `${BASE}/2024/02/WhatsApp-Image-2023-11-09-at-17.10.49-1024x466.jpeg`,
    alt: 'Leadership photograph published on the Vowel Modern School profile',
    credit: 'Vowel Modern School profile'
  },
  iasLead: {
    src: `${BASE}/2023/11/WhatsApp-Image-2023-11-01-at-11.37.08-1024x493.jpeg`,
    alt: 'Leadership photograph published on the Vowel IAS Academy profile',
    credit: 'Vowel IAS Academy profile'
  }
};

/* Calendar pages published by the school (image files, not PDFs). */
export const CALENDAR_PAGES = [
  {
    src: `${BASE}/2023/11/IMPORTANT-DAYS-page-001-scaled.jpg`,
    alt: 'Academic calendar chart, June to September'
  },
  {
    src: `${BASE}/2023/11/IMPORTANT-DAYS-page-002-scaled.jpg`,
    alt: 'Academic calendar chart, October to January'
  },
  {
    src: `${BASE}/2023/11/IMPORTANT-DAYS-page-003.jpg`,
    alt: 'Academic calendar chart, February to April'
  }
];

/* Event posters as published on each event page. */
export const EVENT_POSTERS = {
  subbalakshmi: `${BASE}/2025/10/WhatsApp-Image-2025-10-13-at-09.32.53-1-554x674.jpeg`,
  ozone: `${BASE}/2025/10/WhatsApp-Image-2025-10-13-at-09.32.53-2-554x674.jpeg`,
  engineers: `${BASE}/2025/10/WhatsApp-Image-2025-10-13-at-09.32.52-554x674.jpeg`,
  hindi: `${BASE}/2025/09/WhatsApp-Image-2025-09-14-at-12.38.32-554x674.jpeg`,
  kavi: `${BASE}/2025/09/WhatsApp-Image-2025-09-10-at-09.59.28-554x674.jpeg`,
  nayudamma: `${BASE}/2025/09/WhatsApp-Image-2025-09-10-at-09.59.28-1-554x674.jpeg`,
  teachers: `${BASE}/2025/09/WhatsApp-Image-2025-09-04-at-18.00.49-554x674.jpeg`
};
