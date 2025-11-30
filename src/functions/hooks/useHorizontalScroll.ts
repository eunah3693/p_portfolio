import { useEffect, useRef, useState, useCallback } from 'react';

interface UseHorizontalScrollProps {
  totalSections: number; // 전체 섹션 개수
  titleWidth: number; // 타이틀 너비
  isMobile: boolean; // 모바일 여부
}

/**
 * 가로 스크롤 애니메이션을 위한 커스텀 훅
 * 
 * 기초 지식:
 * - 이 Hook은 마우스 휠 이벤트를 감지해서 섹션들을 가로로 움직입니다
 * - useState: 현재 활성화된 섹션 번호를 저장
 * - useRef: DOM 요소들을 참조하기 위한 React 기능
 * - useEffect: 컴포넌트가 마운트되면 이벤트 리스너를 등록
 * - useCallback: 함수를 메모이제이션해서 성능 최적화
 */
export const useHorizontalScroll = ({
  totalSections,
  titleWidth,
  isMobile,
}: UseHorizontalScrollProps) => {
  const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화된 섹션 인덱스
  const wheelSts = useRef(false); // 광스크롤 방지 플래그
  const sectionRefs = useRef<(HTMLElement | null)[]>([]); // 각 섹션의 DOM 참조

  /**
   * 섹션을 왼쪽으로 슬라이드 (다음 섹션으로)
   */
  const leftSlide = useCallback(
    (index: number) => {
      const section = sectionRefs.current[index];
      if (!section) return;

      const wWidth = window.innerWidth;
      const newLeft = -(wWidth - titleWidth * index);

      // 애니메이션 적용
      section.style.transition = 'left 1s cubic-bezier(0.165, 0.84, 0.44, 1)'; // easeOutCirc와 유사
      section.style.left = `${newLeft}px`;
    },
    [titleWidth]
  );

  /**
   * 섹션을 오른쪽으로 슬라이드 (이전 섹션으로)
   */
  const rightSlide = useCallback(
    (index: number) => {
      const section = sectionRefs.current[index];
      if (!section) return;

      const newLeft = -(titleWidth * (totalSections - index));

      // 애니메이션 적용
      section.style.transition = 'left 1s cubic-bezier(0.165, 0.84, 0.44, 1)';
      section.style.left = `${newLeft}px`;
    },
    [titleWidth, totalSections]
  );

  /**
   * 특정 섹션으로 이동
   */
  const goToSection = useCallback(
    (targetIndex: number) => {
      if (targetIndex < 0 || targetIndex >= totalSections) return;
      if (targetIndex === activeIndex) return;

      // 현재 인덱스보다 크면 왼쪽으로, 작으면 오른쪽으로
      if (targetIndex > activeIndex) {
        // 앞으로 이동
        for (let i = activeIndex + 1; i <= targetIndex; i++) {
          leftSlide(i);
        }
      } else {
        // 뒤로 이동
        for (let i = targetIndex + 1; i < totalSections; i++) {
          rightSlide(i);
        }
      }

      setActiveIndex(targetIndex);
    },
    [activeIndex, totalSections, leftSlide, rightSlide]
  );

  /**
   * 마우스 휠 이벤트 핸들러
   */
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      // 모바일이면 기본 스크롤 동작 사용
      if (isMobile) return;

      e.preventDefault();

      // 광스크롤 방지 (1초 내 한 번만 실행)
      if (wheelSts.current) return;
      wheelSts.current = true;
      setTimeout(() => {
        wheelSts.current = false;
      }, 1000);

      const delta = e.deltaY;

      if (delta > 0) {
        // 아래로 스크롤 = 다음 섹션
        const newIndex = activeIndex + 1;
        if (newIndex < totalSections) {
          leftSlide(newIndex);
          setActiveIndex(newIndex);
        }
      } else {
        // 위로 스크롤 = 이전 섹션
        const newIndex = activeIndex - 1;
        if (newIndex >= 0) {
          rightSlide(activeIndex);
          setActiveIndex(newIndex);
        }
      }
    },
    [activeIndex, totalSections, leftSlide, rightSlide, isMobile]
  );

  /**
   * 이벤트 리스너 등록
   */
  useEffect(() => {
    if (isMobile) return; // 모바일에서는 이벤트 리스너 등록하지 않음

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel, isMobile]);

  /**
   * 섹션 참조를 저장하는 함수
   */
  const setSectionRef = useCallback((index: number) => {
    return (el: HTMLElement | null) => {
      sectionRefs.current[index] = el;
    };
  }, []);

  return {
    activeIndex, // 현재 활성화된 섹션 번호
    goToSection, // 특정 섹션으로 이동하는 함수
    setSectionRef, // 섹션 DOM을 등록하는 함수
  };
};

