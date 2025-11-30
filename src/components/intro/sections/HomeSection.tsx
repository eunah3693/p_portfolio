import React from 'react';
import StarAnimation from '../StarAnimation';

/**
 * Home 섹션 컴포넌트
 * 
 * 기초 지식:
 * - 포트폴리오의 첫 화면 (메인 화면)
 * - 별 회전 애니메이션과 나무 이미지가 있는 섹션
 * - ref: React에서 DOM 요소를 직접 참조하기 위한 prop
 */
interface HomeSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
  onClick: () => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ sectionRef, onClick }) => {
  return (
    <section className="home_wrap" ref={sectionRef}>
      <div className="title" onClick={onClick}>
        <h1>HOME</h1>
      </div>
      <div className="main_bg">
        <StarAnimation />
        <div className="main_tree"></div>
      </div>
    </section>
  );
};

export default HomeSection;

