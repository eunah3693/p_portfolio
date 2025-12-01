import React from 'react';

/**
 * 별 회전 애니메이션 컴포넌트
 * 
 * 기초 지식:
 * - 3개의 별이 서로 다른 속도로 회전하는 효과
 * - CSS animation을 사용해서 무한 회전
 * - position: absolute로 겹쳐서 배치
 */
const StarAnimation: React.FC = () => {
  return (
    <>
      <div className="main_star1" />
      <div className="main_star2" />
      <div className="main_star3" />
    </>
  );
};

export default StarAnimation;

