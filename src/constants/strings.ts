import { paths } from './paths';

export const workProjects = [
  {
    workNumber: 1 as const,
    title: 'GU자사홈페이지',
    number: 'NO.4',
    imageClass: 'num4',
    details: `
      <p>
        <b class="po1">-바로가기</b><br>
        -제작기간: 21.03~21.03 (2주일)<br>
        -참여인원: 5명(기획2 + 디자인2 +개발1)<br>
        -개발환경: HTML,CSS,JQUERY<br>
        -담당업무: 자사홈페이지 프론트앤드 (100%)
      </p>
    `,
    onClick: () => {
      // 프로젝트 링크로 이동
      window.open('http://eunah2104.dothome.co.kr/portfolio1/', '_blank');
    },
  },
  {
    workNumber: 2 as const,
    title: 'DND',
    number: 'NO.5',
    imageClass: 'num5',
    details: `
      <p>
        <b class="po2">-바로가기</b><br>
        -제작기간: 21.03~21.06<br>
        -참여인원: 6명(기획,디자인2+ 프론트2+백앤드1+앱1)<br>
        -개발환경: Laravel framework<br>
        -담당업무: DND관리자페이지 프론트앤드 (90%)
      </p>
    `,
    onClick: () => {
      window.open('http://eunah2104.dothome.co.kr/portfolio2/', '_blank');
    },
  },
  {
    workNumber: 3 as const,
    title: '비지트',
    number: 'NO.5',
    imageClass: 'num5',
    details: `
      <p>
        <b class="po2">-바로가기</b><br>
        -제작기간: 21.07~21.09<br>
        -참여인원: 5명(기획,디자인2+ 프론트2+백앤드1)<br>
        -개발환경: React<br>
        -담당업무: 비지트파트너 홈페이지 프론트앤드 (100%)
      </p>
    `,
  },
  {
    workNumber: 4 as const,
    title: '롯데네슬레 퓨리나',
    number: 'NO.5',
    imageClass: 'num5',
    details: `
      <p>
        <b class="po2">-바로가기</b><br>
        -제작기간: 21.10~21.11<br>
        -참여인원: 4명(디자인1+ 프론트2+백앤드1)<br>
        -개발환경: HTML,CSS,JQUERY,PHP <br>
        -담당업무: 퓨리나 신규 홈페이지 프론트앤드 (80%)
      </p>
    `,
  },
];