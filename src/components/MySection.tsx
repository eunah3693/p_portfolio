import React from 'react';
import styles from '../styles/intro.module.css';


interface IntroSectionProps {
  showScrollHint: boolean; 
}

const MySection: React.FC<IntroSectionProps> = ({ showScrollHint }) => {
  return (
    <section className={`${styles.section} ${styles.heroSection}`}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Kim EunAh
        </h1>
        <p className={styles.heroSubtitle}>
          Frontend Developer
        </p>
        <p className={styles.heroDescription}>
          안녕하세요! 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자 김은아입니다.
          <br />
          HTML, CSS, JavaScript부터 React, Next.js까지 다양한 프로젝트 경험을 가지고 있습니다.
        </p>
      </div>
      {showScrollHint && (
        <div className={styles.scrollHint}>
          스크롤하여 프로젝트 보기 →
        </div>
      )}
    </section>
  );
};

export default MySection;

