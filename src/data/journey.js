import {
  UserRound,
  Wrench,
  Briefcase,
  ShieldCheck,
  FolderGit2,
  GraduationCap,
  Mail,
} from 'lucide-react'

/**
 * The ordered "guided tour" of the site.
 *
 * The order defined here drives:
 *  - the numbered step shown on every page (JourneyBar / NextStep)
 *  - the "follow my story" list on the home page
 *  - the previous / next links at the bottom of each page
 *
 * `contact` lives on the home page, so its path is an in-page hash.
 */
export const journey = [
  {
    id: 'about',
    path: '/about',
    label: 'About',
    title: 'Who I am',
    blurb: 'My background, how I approach support and the languages I speak.',
    icon: UserRound,
  },
  {
    id: 'skills',
    path: '/skills',
    label: 'Skills',
    title: 'Skills & tools',
    blurb: 'The toolkit behind every resolution — from triage and log analysis to AI-assisted workflows.',
    icon: Wrench,
  },
  {
    id: 'experience',
    path: '/experience',
    label: 'Experience',
    title: 'Where I have worked',
    blurb: 'Four years keeping enterprise production running under SLA.',
    icon: Briefcase,
  },
  {
    id: 'cases',
    path: '/case-studies',
    label: 'Case Studies',
    title: 'Real incidents, resolved',
    blurb: 'Three investigations, from first report to a permanent fix.',
    icon: ShieldCheck,
  },
  {
    id: 'projects',
    path: '/projects',
    label: 'Projects',
    title: 'Things I have built',
    blurb: 'Full-stack and front-end work I shipped end to end.',
    icon: FolderGit2,
  },
  {
    id: 'education',
    path: '/education',
    label: 'Education',
    title: 'Education & credentials',
    blurb: 'My degree, bootcamp and verified certifications.',
    icon: GraduationCap,
  },
  {
    id: 'contact',
    path: '/#contact',
    label: 'Contact',
    title: "Let's talk",
    blurb: 'Send me a message or download my CV — I reply within one business day.',
    icon: Mail,
  },
]

export const totalSteps = journey.length
