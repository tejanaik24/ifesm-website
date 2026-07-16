import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ["Inside IFESM's", 'Training Programs'];
export const desktopParagraphPhrase = [
  ' See our safety training in action across Indian industry. Hands-on drills,',
  'certified instructors, and real facility deployments define our',
  'training approach.',
];

// For mobile
export const mobileHeaderPhrase = ["Inside IFESM's", 'Training Programs'];
export const mobileParagraphPhrase = [
  ' See our safety training in action across Indian',
  ' industry. Hands-on drills, certified instructors,',
  'and real facility deployments define our',
  'training approach.',
];

export const edges = [
  {
    point: 'Hands-On Drills',
    details:
      'Interactive emergency evacuation drills and hands-on equipment simulator modules at your facility.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Certified Instructors',
    details:
      'Rich academic background and diversified industrial experience personnel deliver every session.',
    icon: ic_identification,
  },
  {
    point: '39 Training Modules',
    details:
      'From fire fighting to confined space entry, a comprehensive curriculum for heavy industries.',
    icon: ic_lock_closed,
  },
];
