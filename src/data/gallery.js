const BASE = 'https://vowelites.com/wp-content/uploads';

/**
 * Photographs published by the schools themselves. Each item records the school
 * gallery the image came from, which is also what the filter uses; no image is
 * captioned with an activity the source does not state.
 */
export const galleryItems = [
  {
    id: 'vs-1',
    src: `${BASE}/2024/03/1708947824271.jpg`,
    alt: 'Students seated at an academic expo at Vowel School',
    school: 'Vowel School',
    schoolSlug: 'vowel-school',
    activity: 'Academic expo',
    category: 'Vowel School'
  },
  {
    id: 'vs-2',
    src: `${BASE}/2024/03/1708947824137.jpg`,
    alt: 'Photograph published in the Vowel School gallery',
    school: 'Vowel School',
    schoolSlug: 'vowel-school',
    activity: '',
    category: 'Vowel School'
  },
  {
    id: 'vs-3',
    src: `${BASE}/2024/03/1708947824128.jpg`,
    alt: 'Photograph published in the Vowel School gallery',
    school: 'Vowel School',
    schoolSlug: 'vowel-school',
    activity: '',
    category: 'Vowel School'
  },
  {
    id: 'vs-4',
    src: `${BASE}/2024/03/1708947824096.jpg`,
    alt: 'Photograph published in the Vowel School gallery',
    school: 'Vowel School',
    schoolSlug: 'vowel-school',
    activity: '',
    category: 'Vowel School'
  },
  {
    id: 'vs-5',
    src: `${BASE}/2024/03/1708947824043.jpg`,
    alt: 'Photograph published in the Vowel School gallery',
    school: 'Vowel School',
    schoolSlug: 'vowel-school',
    activity: '',
    category: 'Vowel School'
  },
  {
    id: 'v18-1',
    src: `${BASE}/2024/03/IMG_20240210_165643-scaled.jpg`,
    alt: 'Teachers of Vowel 18 CBSE School photographed together',
    school: 'Vowel 18 CBSE School',
    schoolSlug: 'vowel-18-cbse-school',
    activity: 'Faculty',
    category: 'Vowel 18 School'
  },
  {
    id: 'v18-2',
    src: `${BASE}/2024/03/IMG_20240210_165139-scaled.jpg`,
    alt: 'Photograph published in the Vowel 18 School gallery',
    school: 'Vowel 18 CBSE School',
    schoolSlug: 'vowel-18-cbse-school',
    activity: '',
    category: 'Vowel 18 School'
  },
  {
    id: 'v18-3',
    src: `${BASE}/2024/03/IMG_20240210_164949-scaled.jpg`,
    alt: 'Photograph published in the Vowel 18 School gallery',
    school: 'Vowel 18 CBSE School',
    schoolSlug: 'vowel-18-cbse-school',
    activity: '',
    category: 'Vowel 18 School'
  },
  {
    id: 'v14-1',
    src: `${BASE}/2024/02/IMG_20240210_095527-scaled.jpg`,
    alt: 'Photograph published in the Vowel 14 School gallery',
    school: 'Vowel 14 School',
    schoolSlug: 'vowel-14-school',
    activity: '',
    category: 'Vowel 14 School'
  },
  {
    id: 'v14-2',
    src: `${BASE}/2024/02/WhatsApp-Image-2024-01-26-at-13.55.50.jpeg`,
    alt: 'Photograph published in the Vowel 14 School gallery',
    school: 'Vowel 14 School',
    schoolSlug: 'vowel-14-school',
    activity: '',
    category: 'Vowel 14 School'
  },
  {
    id: 'vi-1',
    src: `${BASE}/2024/03/WhatsApp-Image-2024-02-11-at-4.26.22-AM.jpeg`,
    alt: 'Photograph published in the Vowel India School gallery',
    school: 'Vowel India School',
    schoolSlug: 'vowel-india-school',
    activity: '',
    category: 'Vowel India School'
  },
  {
    id: 'vi-2',
    src: `${BASE}/2024/03/WhatsApp-Image-2024-02-10-at-10.34.29-PM.jpeg`,
    alt: 'Photograph published in the Vowel India School gallery',
    school: 'Vowel India School',
    schoolSlug: 'vowel-india-school',
    activity: '',
    category: 'Vowel India School'
  },
  {
    id: 'vm-1',
    src: `${BASE}/2024/02/1707116588427.jpg`,
    alt: 'Photograph published in the Vowel Modern School gallery',
    school: 'Vowel Modern School',
    schoolSlug: 'vowel-modern-school',
    activity: '',
    category: 'Vowel Modern School'
  },
  {
    id: 'vm-2',
    src: `${BASE}/2024/02/1706844385326.jpg`,
    alt: 'Photograph published in the Vowel Modern School gallery',
    school: 'Vowel Modern School',
    schoolSlug: 'vowel-modern-school',
    activity: '',
    category: 'Vowel Modern School'
  },
  {
    id: 'vm-3',
    src: `${BASE}/2024/02/1707116588397.jpg`,
    alt: 'Photograph published in the Vowel Modern School gallery',
    school: 'Vowel Modern School',
    schoolSlug: 'vowel-modern-school',
    activity: '',
    category: 'Vowel Modern School'
  },
  {
    id: 'vm-4',
    src: `${BASE}/2024/02/1707116588412.jpg`,
    alt: 'Photograph published in the Vowel Modern School gallery',
    school: 'Vowel Modern School',
    schoolSlug: 'vowel-modern-school',
    activity: '',
    category: 'Vowel Modern School'
  },
  {
    id: 'v14-3',
    src: `${BASE}/2024/02/IMG_20240210_101852-scaled.jpg`,
    alt: 'Photograph published in the Vowel 14 School gallery',
    school: 'Vowel 14 School',
    schoolSlug: 'vowel-14-school',
    activity: '',
    category: 'Vowel 14 School'
  }
];

export const galleryCategories = [
  'All',
  ...Array.from(new Set(galleryItems.map((item) => item.category)))
];
