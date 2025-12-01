import React from 'react';
import styles from '../styles/intro.module.css';

/**
 * Thank You Section 컴포넌트
 * 
 * 기초 지식:
 * - 포트폴리오의 마지막 섹션
 * - 감사 메시지와 연락처 정보를 보여줍니다
 * - 어두운 배경에 그라디언트 텍스트
 */

const ThankYouSection: React.FC = () => {
  return (
    <section className={`${styles.section} ${styles.thankYouSection}`}>
      <div className={styles.thankYouContent}>
        <h2 className={styles.thankYouTitle}>Thank You!</h2>
        <p className={styles.thankYouMessage}>
          포트폴리오를 봐주셔서 감사합니다.
          <br />
          함께 일하고 싶으시다면 언제든 연락주세요!
        </p>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>📧 eunah3693@gmail.com</div>
          <div className={styles.contactItem}>📱 Contact Me</div>
          <div className={styles.contactItem}>
            💼 GitHub: github.com/eunah3693
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;

