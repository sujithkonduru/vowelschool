import { IMAGES } from './images.js';

/**
 * Institutions as listed in the site's "Our Branches" menu, plus VZ Planet-E,
 * which appears in the gallery menu and footer. Copy is taken from each
 * institution's own published profile. Fields the source does not publish are
 * left empty rather than filled with invented detail.
 *
 * `note` records a gap in the source so the UI can say so plainly.
 */
export const schools = [
  {
    slug: 'vowel-school',
    name: 'Vowel School',
    group: 'schools',
    levels: 'Nursery to Class X',
    locality: 'Srinagar Colony, Nellore',
    address: 'Annamaiah Circle, Srinagar Colony, Mini Bypass Road, Nellore-3',
    phones: ['92999 90194', '92999 90195'],
    email: 'vowelschool1@gmail.com',
    principal: 'R. Venu',
    principalRole: 'Chairman & Managing Director; listed as Principal',
    founded: 'June 2011',
    summary:
      'A dynamic learning institution seeking excellence for present and future needs while learning from Indian ethical and moral value systems.',
    body: [
      'Vowel Learning Initiation society began Vowel School in June 2011, with the aim of developing exceptional students who contribute to society.',
      'The school describes high academic standards, an advanced curriculum, and facilities that include sports, libraries, labs and arts. It records a ten-year legacy and seven institutes in Nellore.',
      '“Knowledge is Liberation,” reads the principal’s message on the school profile, which commits parents and teachers to channelling students’ talents and energy into creative community building.'
    ],
    highlights: [
      ['2000+', 'students'],
      ['7+', 'campuses'],
      ['10+', 'years']
    ],
    photo: IMAGES.assembly,
    photoKind: 'activity',
    established: true,
    meta: {
      title: 'Vowel School, Nellore | Vowelites',
      description:
        'Vowel School, the founding institution of the Vowelites group in Nellore, teaching Nursery to Class X.'
    }
  },
  {
    slug: 'vowel-pre-primary-school',
    name: 'Vowel Pre Primary School',
    group: 'schools',
    levels: '',
    locality: 'Nellore',
    address: '',
    phones: [],
    email: '',
    principal: 'P. Maheswari',
    principalRole: 'Preprimary Principal',
    summary:
      'The pre-primary stage of Vowel School. The published profile lists P. Maheswari as Preprimary Principal.',
    body: [],
    photo: null,
    photoKind: 'activity',
    note: 'The published profile does not include a description, address or contact numbers.',
    meta: {
      title: 'Vowel Pre Primary School | Vowelites',
      description: 'The pre-primary stage of Vowel School, Nellore.'
    }
  },
  {
    slug: 'vowel-primary-school',
    name: 'Vowel Primary School',
    group: 'schools',
    levels: 'Upper Primary',
    locality: 'Mini Bypass Road, Nellore',
    address: 'Annamaiah Circle, Mini Bypass Road, Nellore',
    phones: ['90300 16135'],
    email: '',
    principal: 'Mr. Ramanaiah Naidu',
    principalRole: 'Principal, Vowel Upper Primary School',
    summary:
      'The primary stage of Vowel School, identified on its profile as Vowel Upper Primary School.',
    body: [
      'The profile carries the group’s academic message: a commitment to a dynamic learning institution seeking excellence for present and future needs while learning from Indian ethical and moral values.',
      'Parents and teachers, it states, are committed to channelling students’ talents and energy into creative community building.'
    ],
    photo: null,
    photoKind: 'activity',
    meta: {
      title: 'Vowel Primary School | Vowelites',
      description: 'Vowel Upper Primary School, Annamaiah Circle, Nellore.'
    }
  },
  {
    slug: 'vowel-ico-school',
    name: 'Vowel ICO School',
    group: 'schools',
    levels: '',
    locality: 'Mini Bypass Road, Nellore',
    address: 'Near Annamaiah Circle, Mini Bypass Road, Nellore',
    phones: [],
    email: '',
    principal: 'Mr. Balu Yadav',
    principalRole: 'Principal & Executive Director',
    summary:
      'An ICO campus on Mini Bypass Road, Nellore, led by Principal and Executive Director Mr. Balu Yadav.',
    body: [
      'The principal’s message welcomes students, staff and parents at the start of an academic session, and describes efforts to maintain high academic standards and a conducive environment for holistic growth.',
      'It names Respect, Integrity, Compassion and Excellence as values the campus seeks to instil, and refers to dedicated, highly qualified staff acting as role models.'
    ],
    photo: null,
    photoKind: 'activity',
    note: 'The published profile does not list contact numbers, an email address or a class range.',
    meta: {
      title: 'Vowel ICO School | Vowelites',
      description: 'Vowel ICO School, Mini Bypass Road, Nellore.'
    }
  },
  {
    slug: 'vowel-secondary-school',
    name: 'Vowel Secondary School',
    group: 'schools',
    levels: 'Secondary',
    locality: 'Mini Bypass Road, Nellore',
    address: 'Annamaiah Circle, Mini Bypass Road, Nellore',
    phones: ['87126 11350'],
    email: '',
    principal: 'Mr. Rafi',
    principalRole: 'Principal, Vowel Secondary School',
    summary:
      'The secondary stage of Vowel School at Annamaiah Circle, Nellore, led by Principal Mr. Rafi.',
    body: [
      'The profile repeats the group’s commitment to a dynamic learning institution seeking excellence for present and future needs while learning from Indian ethical and moral values.',
      'It also states that parents and teachers work together to channel students’ talents and energy into creative community building.'
    ],
    photo: IMAGES.rafi,
    photoKind: 'portrait',
    photoCredit: 'Sk. Rafi, Principal',
    note: 'The published profile does not state a class range.',
    meta: {
      title: 'Vowel Secondary School | Vowelites',
      description: 'Vowel Secondary School, Annamaiah Circle, Nellore.'
    }
  },
  {
    slug: 'vowel-14-school',
    name: 'Vowel 14 School',
    group: 'schools',
    levels: '',
    locality: 'Vijayalakshmi Nagar, Podalakur Road',
    address: 'Vijayalakshmi Nagar, Opp TGP office, Podalakur Road, Nellore',
    phones: ['87126 11351', '87126 11398', '87126 11375'],
    email: 'principalvowel14@gmail.com',
    principal: 'Mr. Ramanjaneyulu Naidu',
    principalRole: 'Principal',
    summary:
      'A learning centre on Podalakur Road built around what the school calls “a practical mind where only work speaks but not people”.',
    body: [
      '“A school is a symbol of self-discipline. It is a benchmark of good qualities at the right time. It is a choice of learners with a burning desire. It is a dais of structuring the dreams of today to reach a better tomorrow,” reads the profile.',
      'The school describes itself as a learning centre of practical mind where only work speaks but not people.'
    ],
    photo: null,
    photoKind: 'activity',
    note: 'The published profile does not state a class range.',
    meta: {
      title: 'Vowel 14 School, Nellore | Vowelites',
      description: 'Vowel 14 School, Vijayalakshmi Nagar, Podalakur Road, Nellore.'
    }
  },
  {
    slug: 'vowel-18-cbse-school',
    name: 'Vowel 18 CBSE School',
    group: 'schools',
    levels: 'I to X (co-education); V to X girls residential campus',
    locality: 'Kodavalur, SPSR Nellore',
    address: 'NH-5, North Rajupalem Cross Road, Kodavalur (M), SPSR Nellore',
    phones: ['91000 41476', '87126 11400', '87126 11366'],
    email: 'vowel18cbseschool@gmail.com',
    principal: 'Mr. Vamsi',
    principalRole: 'Principal, Vowel 18 CBSE School',
    summary:
      'A CBSE school at North Rajupalem Cross Road, Kodavalur, offering classes I to X and a girls’ residential campus from V to X.',
    body: [
      'The principal writes of the privilege of serving the Nellore community, and says the school aims to provide high-quality education that motivates and empowers students to become lifelong learners and productive members of society.',
      'Education, the profile argues, is not merely information put into a child’s brain but should cater to individual needs. The school’s task, it says, is to make it possible for students to reach their full potential.'
    ],
    photo: IMAGES.faculty,
    photoKind: 'activity',
    photoCredit: 'Teachers of Vowel 18 CBSE School',
    meta: {
      title: 'Vowel 18 CBSE School, Kodavalur | Vowelites',
      description:
        'Vowel 18 CBSE School, North Rajupalem Cross Road, Kodavalur, SPSR Nellore. Classes I to X.'
    }
  },
  {
    slug: 'vowel-india-school',
    name: 'Vowel India School',
    group: 'schools',
    levels: 'V to X boys’ residential (CBSE proposed)',
    locality: 'Bodduvaripalem, Kodavalur',
    address:
      'NH-5, Near Bharath Petroleum Bunk, Bodduvaripalem, Kodavalur (M), SPSR Nellore',
    phones: ['87126 11352', '87126 11399', '87126 11376'],
    email: 'viprincipal2020@gmail.com',
    principal: 'Mr. Suresh',
    principalRole: 'Principal, Vowel India School',
    summary:
      'A boys’ residential campus on NH-5 at Bodduvaripalem, Kodavalur, for classes V to X.',
    body: [
      'The profile describes a school as a symbol of self-discipline, a benchmark of good qualities and a dais for structuring dreams.',
      'Vowel India is described as a learning centre of practical mind where only work speaks but not people. The class range is listed as V to X boys’ residential, with CBSE shown as proposed.'
    ],
    photo: null,
    photoKind: 'activity',
    meta: {
      title: 'Vowel India School, Kodavalur | Vowelites',
      description: 'Vowel India School, NH-5 Bodduvaripalem, Kodavalur, SPSR Nellore.'
    }
  },
  {
    slug: 'vowel-vinnlight-school',
    name: 'Vowel Vinnlight School',
    group: 'schools',
    levels: 'Class I to V',
    locality: 'NCC Colony, Nellore',
    address: 'Apollo Towers, 4th Lane, NCC Colony, Podalakur Road, Nellore-4',
    phones: ['87126 11364', '87126 11384'],
    email: '',
    principal: 'Ms. Jagannadha Lakshmi',
    principalRole: 'Principal, Vowel Vinnlight School',
    summary:
      'A primary school for classes I to V at Apollo Towers, NCC Colony, run in association with Vowel 14 School.',
    body: [
      'The school lists classes I to V and notes that it operates in association with Vowel 14 School.',
      'Its descriptive paragraph follows the group’s account of a school as a symbol of self-discipline and a learning centre of practical mind where only work speaks but not people.'
    ],
    photo: null,
    photoKind: 'activity',
    meta: {
      title: 'Vowel Vinnlight School, Nellore | Vowelites',
      description: 'Vowel Vinnlight School, Apollo Towers, NCC Colony, Nellore.'
    }
  },
  {
    slug: 'vowel-modern-school',
    name: 'Vowel Modern School',
    group: 'schools',
    levels: 'Nursery to Class X',
    locality: 'Saraswathi Nagar, Nellore',
    address: 'Saraswathi Nagar, Nellore-2',
    phones: ['87126 11354', '87126 11401', '87126 11378'],
    email: 'vowelmodernschool7@gmail.com',
    principal: 'Mr. Prabhakar',
    principalRole: 'Principal, Vowel Modern School',
    summary:
      'A nursery to Class X school at Saraswathi Nagar, Nellore-2, with one of the group’s largest activity galleries.',
    body: [
      'The profile describes Vowel Modern as a learning centre of practical mind where only work speaks but not people.',
      'Its gallery records assemblies, Independence Day, Krishna Janmashtami, Hindi Diwas, club activity, dance, karate, chess and carrom, lab activity and field trips.'
    ],
    photo: IMAGES.modernLead,
    photoKind: 'activity',
    meta: {
      title: 'Vowel Modern School, Nellore | Vowelites',
      description: 'Vowel Modern School, Saraswathi Nagar, Nellore-2. Nursery to Class X.'
    }
  },
  {
    slug: 'vowel-minerva-school',
    name: 'Vowel Minerva School',
    group: 'schools',
    levels: 'Nursery to Class X',
    locality: 'Vaddi Palem, Kavali',
    address: 'WX7Q+QRP, Railway Station Road, Vaddi Palem, Kavali, Andhra Pradesh 524201',
    phones: ['87126 11355', '87126 11402'],
    email: '',
    principal: 'Mr. Suresh',
    principalRole: 'Principal, Vowel Minerva School',
    summary:
      'A nursery to Class X school on Railway Station Road, Vaddi Palem, Kavali.',
    body: [
      'The profile describes Vowel Minerva as a learning centre of practical mind where only work speaks but not people.',
      'Its gallery lists Independence Day celebrations, English Estatica, Krishnastami, National Mathematics Day, a science launcher, Telugu Vaarotsavalu, Sankranthi and Dussehra celebrations, field trips and awareness programmes.'
    ],
    photo: null,
    photoKind: 'activity',
    meta: {
      title: 'Vowel Minerva School, Kavali | Vowelites',
      description: 'Vowel Minerva School, Railway Station Road, Vaddi Palem, Kavali.'
    }
  },
  {
    slug: 'vowel-junior-college',
    name: 'Vowel Junior College',
    group: 'colleges',
    levels: 'Higher secondary',
    locality: 'Annamaiah Circle, Nellore',
    address: 'Annamaiah Circle, Mini Bypass Road, Nellore-524003',
    phones: ['91339 99514', '91009 29826', '91333 93501'],
    email: 'voweljrcollege@gmail.com',
    principal: 'Mr. R. Venu',
    principalRole: 'Principal, Vowel Junior College',
    summary:
      'Higher secondary education at Annamaiah Circle, Nellore, within the Vowelites network.',
    body: [
      'The profile carries the group’s welcome and its commitment to a dynamic learning institution seeking excellence for present and future needs.',
      'Its gallery includes the college building, laboratory activities, classrooms and a concept drive held at the college.'
    ],
    photo: null,
    photoKind: 'activity',
    note: 'The published profile does not state the courses offered.',
    meta: {
      title: 'Vowel Junior College, Nellore | Vowelites',
      description: 'Vowel Junior College, Annamaiah Circle, Nellore.'
    }
  },
  {
    slug: 'vowel-ias-academy',
    name: 'Vowel IAS Academy',
    group: 'colleges',
    levels: 'Civil Services — Preliminary, Main and Personality Test',
    locality: 'Near Madras Busstand, Nellore',
    address: 'Opp Krishna Chaitanya Jr College, Near Madras Busstand, Nellore',
    phones: ['87126 11357'],
    email: '',
    principal: 'N. Venkata Krishnaiah, M.A.',
    principalRole: 'Principal',
    founded: '2021',
    summary:
      'An academy preparing candidates for the Civil Services Examination, founded in 2021 and directed by R. Venu.',
    body: [
      'The academy prepares candidates at the Preliminary Test, Main Examination and Personality Test levels, and was founded in 2021 by Director R. Venu.',
      'Its faculty is described as experienced teachers from central universities and other reputed institutes, normally with at least two teachers for each subject and ten guiding General Studies.',
      'The profile also describes a correspondence-education centre that prepares reading material using distance-education techniques, and carries a first-person account by Principal N. Venkata Krishnaiah of his own Civil Services attempts and teaching experience.'
    ],
    photo: IMAGES.iasLead,
    photoKind: 'activity',
    meta: {
      title: 'Vowel IAS Academy, Nellore | Vowelites',
      description:
        'Vowel IAS Academy, Nellore: preparation for the Civil Services Preliminary, Main and Personality Test.'
    }
  },
  {
    slug: 'vowel-vinnraize-college',
    name: 'Vowel Vinnraize College',
    group: 'colleges',
    levels: '',
    locality: 'Nellore',
    address: '',
    phones: [],
    email: '',
    principal: '',
    principalRole: '',
    summary: 'A college in the Vowelites educational network.',
    body: [],
    photo: null,
    photoKind: 'activity',
    note: 'The published profile currently contains no description, courses or contact details.',
    meta: {
      title: 'Vowel Vinnraize College | Vowelites',
      description: 'Vowel Vinnraize College, part of the Vowelites educational network in Nellore.'
    }
  },
  {
    slug: 'vz-planet-e',
    name: 'VZ Planet – E',
    group: 'colleges',
    levels: '',
    locality: 'Nellore',
    address: '',
    phones: ['93929 02960', '93929 02961', '93929 02962'],
    email: 'vzplaneteacademy@gmail.com',
    principal: '',
    principalRole: '',
    summary:
      'A Vowelites learning initiative listed in the site’s gallery menu and footer.',
    body: [],
    photo: null,
    photoKind: 'activity',
    note: 'The published page currently lists contact numbers and an email address but no description or courses.',
    meta: {
      title: 'VZ Planet – E | Vowelites',
      description: 'VZ Planet – E, a Vowelites learning initiative in Nellore.'
    }
  }
];

export const schoolsBySlug = Object.fromEntries(schools.map((s) => [s.slug, s]));

export const schoolGroups = [
  {
    key: 'schools',
    label: 'Schools',
    description: 'Pre-primary through secondary schooling across Nellore district.'
  },
  {
    key: 'colleges',
    label: 'Colleges & academies',
    description: 'Higher secondary, degree and civil-services preparation.'
  }
];
