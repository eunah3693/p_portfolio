import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from '../src/styles/intro.module.css';
import IntroSection from '../src/components/IntroSection';
import MySection from '../src/components/MySection';
import WorksSection from '../src/components/WorksSection';
import PortfolioSection from '../src/components/PortfolioSection';
import ThankYouSection from '../src/components/ThankYouSection';


const IntroPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0); // 현재 섹션 
  const [isScrolling, setIsScrolling] = useState(false); // 스크롤 중인지
  const [prevSection, setPrevSection] = useState(0); // 이전 섹션
  const totalSections = 5; // 총 섹션 
  const workContainerRef = useRef<HTMLDivElement | null>(null); 
  const portfolioContainerRef = useRef<HTMLDivElement | null>(null); 

  // 세로 스크롤 섹션인지 확인
  const isScrollableSection = (sectionIndex: number) => {
    return sectionIndex === 2 || sectionIndex === 3; // Work 또는 Portfolio
  };

  // 현재 섹션의 ref 
  const getCurrentSectionRef = (sectionIndex: number) => {
    if (sectionIndex === 2) return workContainerRef.current;
    if (sectionIndex === 3) return portfolioContainerRef.current;
    return null;
  };


  const handleWheel = (e: WheelEvent) => {
    if (isScrolling) return; // 스크롤 중이면 무시

    // Work 또는 Portfolio 섹션인 경우 세로 스크롤 체크
    if (isScrollableSection(currentSection)) {
      const scrollElement = getCurrentSectionRef(currentSection);
      
      if (scrollElement) {
        const { scrollTop, scrollHeight, clientHeight } = scrollElement;
        const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 5; // 바닥 여백
        const isAtTop = scrollTop < 5; // 최상단 여백백

        // 아래로 스크롤 && 바닥에 도달 → 다음 섹션으로
        if (e.deltaY > 0 && isAtBottom) {
          e.preventDefault();
          setIsScrolling(true);
          setTimeout(() => setIsScrolling(false), 1000);
          setCurrentSection((prev) => Math.min(prev + 1, totalSections - 1));
          return;
        }
        
        // 위로 스크롤 && 최상단에 도달 → 이전 섹션으로
        if (e.deltaY < 0 && isAtTop) {
          e.preventDefault();
          setIsScrolling(true);
          setTimeout(() => setIsScrolling(false), 1000);
          setCurrentSection((prev) => Math.max(prev - 1, 0));
          return;
        }

        return;
      }
    }

    // Intro, My, Thank You 섹션: 바로 가로 이동
    e.preventDefault();
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 1000);

    if (e.deltaY > 0) {
      // 다음 섹션
      setCurrentSection((prev) => Math.min(prev + 1, totalSections - 1));
    } else {
      // 이전 섹션
      setCurrentSection((prev) => Math.max(prev - 1, 0));
    }
  };


  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isScrolling, currentSection]);


  useEffect(() => {
    if (isScrollableSection(currentSection)) {
      const container = getCurrentSectionRef(currentSection);
      
      if (container) {
        // 다음 섹션에서 뒤로 온 경우 (prevSection > currentSection) → 맨 밑
        if (prevSection > currentSection) {
          const maxScroll = container.scrollHeight - container.clientHeight;
          container.scrollTop = maxScroll;
        } 
        // 이전 섹션에서 앞으로 온 경우 (prevSection < currentSection) → 맨 위
        else if (prevSection < currentSection) {
          container.scrollTop = 0;
        }
      }
    }
    
    // 이전 섹션 업데이트
    setPrevSection(currentSection);
  }, [currentSection]);


  return (
    <>
      <Head>
        <title>Portfolio - Kim EunAh | 가로 스크롤 포트폴리오</title>
        <meta name="description" content="김은아의 포트폴리오 - 프론트엔드 개발자" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>
        <div
          className={styles.scrollWrapper}
          style={{
            transform: `translateX(-${currentSection * 100}vw)`,
          }}
        >
          {/* 1. Intro Section */}
          <IntroSection showScrollHint={currentSection === 0} />

          {/* 2. My Section */}
          <MySection showScrollHint={currentSection === 1} />

          {/* 3. Work Section */}
          <WorksSection 
            projectsContainerRef={workContainerRef}
            showScrollHint={currentSection === 2}
          />

          {/* 4. Portfolio Section */}
          <PortfolioSection 
            projectsContainerRef={portfolioContainerRef}
            showScrollHint={currentSection === 3}
          />

          {/* 5. Thank You Section */}
          <ThankYouSection />
        </div>

        {/* Navigation */}
        <nav className={styles.navigation}>
          {Array.from({ length: totalSections }).map((_, index) => (
            <button
              key={index}
              className={`${styles.navDot} ${
                currentSection === index ? styles.active : ''
              }`}
              aria-label={`섹션 ${index + 1}로 이동`}
            />
          ))}
        </nav>
      </div>
    </>
  );
};

export default IntroPage;

