import React, { useEffect } from 'react';
import Head from 'next/head';
import { useHorizontalScroll } from '../src/functions/hooks/useHorizontalScroll';
import { useResponsive } from '../src/functions/hooks/useResponsive';

// 섹션 컴포넌트들
import HomeSection from '../src/components/intro/sections/HomeSection';
import ProfileSection from '../src/components/intro/sections/ProfileSection';
import EducationSection from '../src/components/intro/sections/EducationSection';
import CareerSection from '../src/components/intro/sections/CareerSection';
import WorkSection from '../src/components/intro/sections/WorkSection';
import ContactSection from '../src/components/intro/sections/ContactSection';

/**
 * Portfolio Intro 페이지
 * 
 * 기초 지식:
 * - Next.js의 페이지 컴포넌트
 * - pages 폴더 안의 파일은 자동으로 라우트가 생성됨
 * - 이 파일은 "/intro" 경로로 접근 가능
 * 
 * 동작 방식:
 * 1. useResponsive로 모바일/데스크톱 감지
 * 2. useHorizontalScroll로 가로 스크롤 애니메이션 처리
 * 3. 각 섹션을 컴포넌트로 분리해서 관리
 */
const IntroPage: React.FC = () => {
  const { isMobile, windowWidth } = useResponsive();
  const titleWidth = 30; // title의 너비 (px)
  const totalSections = 9; // 전체 섹션 개수

  const { activeIndex, goToSection, setSectionRef } = useHorizontalScroll({
    totalSections,
    titleWidth,
    isMobile,
  });

  // Work 프로젝트 데이터
  const workProjects = [
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

  // 모바일에서는 세로 스크롤 허용
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobile]);

  return (
    <>
      <Head>
        <title>Portfolio Intro - Kim EunAh</title>
        <meta name="description" content="김은아의 포트폴리오 소개 페이지" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>

      <div className="intro-page">
        <article className="main_wrap">
          {/* Home 섹션 */}
          <HomeSection
            sectionRef={setSectionRef(0)}
            onClick={() => goToSection(0)}
          />

          {/* Profile 섹션 */}
          <ProfileSection
            sectionRef={setSectionRef(1)}
            onClick={() => goToSection(1)}
          />

          {/* Education 섹션 */}
          <EducationSection
            sectionRef={setSectionRef(2)}
            onClick={() => goToSection(2)}
          />

          {/* Career 섹션 */}
          <CareerSection
            sectionRef={setSectionRef(3)}
            onClick={() => goToSection(3)}
          />

          {/* Work 섹션들 */}
          {workProjects.map((project, index) => (
            <WorkSection
              key={index}
              sectionRef={setSectionRef(4 + index)}
              onClick={() => goToSection(4 + index)}
              workNumber={project.workNumber}
              title={project.title}
              number={project.number}
              details={project.details}
              imageClass={project.imageClass}
              onProjectClick={project.onClick}
            />
          ))}

          {/* Contact 섹션 */}
          <ContactSection
            sectionRef={setSectionRef(8)}
            onClick={() => goToSection(8)}
          />
        </article>
      </div>
    </>
  );
};

export default IntroPage;

