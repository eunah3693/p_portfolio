import { paths } from './paths';

export const navData = [
  { text: '공연전시', url: paths.GALLERY, filter: { artType: 'PERFORMANCE_EXHIBITION', artCode: 'EXHIBITION' } },
  { text: '행사축제', url: paths.FESTIVAL, filter: { artType: 'EVENT_FESTIVAL', artCode: 'EVENT_FESTIVAL' } },
  { text: '교육체험', url: paths.EDUCATION, filter: { artType: 'EDUCATION_EXPERIENCE', artCode: 'EDUCATION_EXPERIENCE' } },
  { text: '캘린더', url: paths.CALENDAR },
  { text: '지도', url: paths.MAP },
];
