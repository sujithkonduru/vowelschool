import { EVENT_POSTERS } from './images.js';

/**
 * Observances published on the site's event archive. Dates are the published
 * dates and are historical records, not an upcoming calendar.
 */
export const events = [
  {
    slug: 'ms-subbalakshmi-ji',
    title: 'MS Subbalakshmi Ji',
    date: '2025-09-16',
    displayDate: '16 September 2025',
    shortDate: '16 Sep 2025',
    summary:
      'A birth-anniversary observance recalling the legendary Carnatic singer M. S. Subbalakshmi.',
    body: [
      'The school marked the birth anniversary of M. S. Subbalakshmi, the Carnatic vocalist whose recordings shaped South Indian classical music in the twentieth century.',
      'The published note recounts a personal meeting with her, an invitation to a T. Nagar Samithi anniversary, and her singing of Sai bhajans at the occasion.'
    ],
    poster: EVENT_POSTERS.subbalakshmi,
    posterAlt: 'Poster for the M. S. Subbalakshmi birth anniversary observance'
  },
  {
    slug: 'world-ozone-day',
    title: 'World Ozone Day',
    date: '2025-09-16',
    displayDate: '16 September 2025',
    shortDate: '16 Sep 2025',
    summary:
      'Students observed the International Day for the Preservation of the Ozone Layer.',
    body: [
      'The observance described the ozone layer as the earth’s sunscreen and noted its gradual healing through global efforts.',
      'The school’s message asked students to reduce harmful chemicals, conserve energy and plant trees.'
    ],
    poster: EVENT_POSTERS.ozone,
    posterAlt: 'Poster for World Ozone Day'
  },
  {
    slug: 'engineers-day',
    title: 'National Engineer’s Day',
    date: '2025-09-15',
    displayDate: '15 September 2025',
    shortDate: '15 Sep 2025',
    summary:
      'A tribute to the engineering community on the birth anniversary of Sir M. Visvesvaraya.',
    body: [
      'The school congratulated the engineering community on National Engineer’s Day, observed on the birth anniversary of Sir Mokshagundam Visvesvaraya.',
      'The published note refers to his legacy, his contributions as a civil engineer and administrator, and his service as Dewan of Mysore from 1912 to 1918.'
    ],
    poster: EVENT_POSTERS.engineers,
    posterAlt: 'Poster for National Engineer’s Day'
  },
  {
    slug: 'hindi-diwas',
    title: 'Hindi Diwas',
    date: '2025-09-14',
    displayDate: '14 September 2025',
    shortDate: '14 Sep 2025',
    summary:
      'Hindi Diwas observed across the schools, celebrating the language and its literature.',
    body: [
      'The observance describes Hindi as a mother tongue and a cultural heritage.',
      'The school’s note says Vowel connects students with Hindi literature and culture through the occasion.'
    ],
    poster: EVENT_POSTERS.hindi,
    posterAlt: 'Poster for Hindi Diwas'
  },
  {
    slug: 'kavi-samrat-viswanatha-sathyanarana-birth-anniversary',
    title: 'Kavi Samrat Viswanatha Sathyanarayana Birth Anniversary',
    date: '2025-09-10',
    displayDate: '10 September 2025',
    shortDate: '10 Sep 2025',
    summary:
      'The birth anniversary of the Telugu writer and poet Viswanatha Satyanarayana.',
    body: [
      'The school remembered Viswanatha Satyanarayana, the Telugu writer and poet known as Kavi Samrat.',
      'The published note describes his range of genres and themes, his major works, and the awards conferred on him.'
    ],
    poster: EVENT_POSTERS.kavi,
    posterAlt: 'Poster for the Viswanatha Satyanarayana birth anniversary'
  },
  {
    slug: 'dr-y-nayudamma-birth-anniversary',
    title: 'Dr. Y. Nayudamma Birth Anniversary',
    date: '2025-09-10',
    displayDate: '10 September 2025',
    shortDate: '10 Sep 2025',
    summary:
      'A remembrance of Dr. Y. Nayudamma and his contributions as a scientist and administrator.',
    body: [
      'The school marked the birth anniversary of Dr. Y. Nayudamma Yarlagadda.',
      'The published note speaks of his knowledge, innovation and compassion, his contribution to paediatric surgery, his surgical skill, his care for human values, his leadership and his humility.'
    ],
    poster: EVENT_POSTERS.nayudamma,
    posterAlt: 'Poster for the Dr. Y. Nayudamma birth anniversary'
  },
  {
    slug: 'teachers-day-2025',
    title: 'Teacher’s Day 2025',
    date: '2025-09-05',
    displayDate: '5 September 2025',
    shortDate: '5 Sep 2025',
    summary: 'A tribute to teachers across the Vowelites schools.',
    body: [
      'The school marked Teacher’s Day with a tribute to teachers and the part they play in a pupil’s development.',
      'The published note credits teachers with helping students grow and wishes them a happy Teacher’s Day.'
    ],
    poster: EVENT_POSTERS.teachers,
    posterAlt: 'Poster for Teacher’s Day 2025'
  },
  {
    slug: 'world-war-ii',
    title: 'World War II',
    date: '2025-09-02',
    displayDate: '2 September 2025',
    shortDate: '2 Sep 2025',
    summary:
      'A history observance covering the Second World War, its alliances and its timeline.',
    body: [
      'The school observed the anniversary of the Second World War with a short account of the conflict.',
      'The note covers the Axis and Allied powers, Germany’s invasion of Poland, and the war’s start and end dates.'
    ],
    poster: null,
    posterAlt: ''
  },
  {
    slug: 'national-sports-day-2025',
    title: 'National Sports Day 2025',
    date: '2025-08-29',
    displayDate: '29 August 2025',
    shortDate: '29 Aug 2025',
    summary:
      'Sports Day observed on the birth anniversary of Major Dhyan Chand.',
    body: [
      'The school celebrated sport, fitness and teamwork on National Sports Day, observed on Major Dhyan Chand’s birth anniversary.',
      'The published note connects sport with discipline, hard work and unity.'
    ],
    poster: null,
    posterAlt: ''
  },
  {
    slug: 'ganesh-chaturthi-2025',
    title: 'Ganesh Chaturthi 2025',
    date: '2025-08-27',
    displayDate: '27 August 2025',
    shortDate: '27 Aug 2025',
    summary:
      'Ganesh Chaturthi celebrated across the school branches with stories, songs and creativity.',
    body: [
      'The schools prepared for Ganesh Chaturthi with stories, songs and decorations.',
      'The published note describes learners, laughter, creativity and devotion, and closes with a wish for happiness and positivity.'
    ],
    poster: null,
    posterAlt: ''
  }
];

export const eventsBySlug = Object.fromEntries(events.map((e) => [e.slug, e]));
