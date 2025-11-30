import { useState, useEffect } from 'react';

/**
 * 반응형 디자인을 위한 커스텀 훅
 * 
 * 기초 지식:
 * - 화면 크기를 감지해서 모바일인지 데스크톱인지 판단합니다
 * - window.innerWidth: 브라우저 창의 가로 크기
 * - 600px 이하면 모바일로 판단 (원본 코드 기준)
 */
export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // 초기 화면 크기 설정
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width <= 600);
    };

    // 최초 실행
    handleResize();

    // 화면 크기 변경 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isMobile, // 모바일 여부
    windowWidth, // 현재 화면 너비
    isTablet: windowWidth > 600 && windowWidth <= 900, // 태블릿 여부
    isDesktop: windowWidth > 900, // 데스크톱 여부
  };
};

