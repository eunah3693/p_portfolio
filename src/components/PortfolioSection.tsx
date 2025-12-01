import React from 'react';
import { workProjects } from '../constants/strings';
import styles from '../styles/intro.module.css';


interface PortfolioSectionProps {
  projectsContainerRef: React.RefObject<HTMLDivElement | null>; 
  showScrollHint: boolean; 
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ 
  projectsContainerRef, 
  showScrollHint, 
}) => {
  return (
    <section className={`${styles.section} ${styles.projectsSection}`}>
      <div 
        className={styles.projectScrollContainer}
        ref={projectsContainerRef}
      >
        {workProjects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <div className={styles.projectContent}>
              <div className={styles.projectInfo}>
                <div className={styles.projectNumber}>
                  PROJECT {String(index + 1).padStart(2, '0')}
                </div>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <div
                  className={styles.projectDetails}
                  dangerouslySetInnerHTML={{ __html: project.details }}
                />
                
                {/* 추가 정보 섹션 */}
                <div className={styles.projectExtraInfo}>
                  <h3>프로젝트 상세</h3>
                  <div className={styles.projectTech}>
                    <h4>사용 기술</h4>
                    <p>{project.details.includes('HTML') && 'HTML5, CSS3, JavaScript'}</p>
                    <p>{project.details.includes('React') && 'React, TypeScript'}</p>
                    <p>{project.details.includes('Laravel') && 'Laravel Framework, PHP'}</p>
                    {!project.details.includes('HTML') && !project.details.includes('React') && !project.details.includes('Laravel') && 
                      <p>HTML, CSS, jQuery, PHP</p>}
                  </div>
                  <div className={styles.projectRole}>
                    <h4>담당 역할</h4>
                    <p>프론트엔드 개발 및 UI/UX 구현</p>
                    <p>반응형 웹 디자인 적용</p>
                    <p>크로스 브라우징 테스트 및 최적화</p>
                  </div>
                  <div className={styles.projectHighlight}>
                    <h4>주요 성과</h4>
                    <p>✨ 사용자 친화적인 인터페이스 구현</p>
                    <p>✨ 모바일 최적화로 접근성 향상</p>
                    <p>✨ 프로젝트 일정 내 성공적 완료</p>
                  </div>
                </div>
              </div>
              <div className={styles.projectVisual}>
                <div
                  className={`${styles.projectImage}}`}
                  onClick={project.onClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && project.onClick) {
                      project.onClick();
                    }
                  }}
                />
                <p className={styles.imageHint}>클릭하여 프로젝트 보기</p>
              </div>
            </div>
            
            {index < workProjects.length - 1 && (
              <div className={styles.projectDivider} />
            )}
          </div>
        ))}
        
        {showScrollHint && (
          <div className={styles.scrollDownHint}>
            ↓ 아래로 스크롤하여 더 많은 프로젝트 보기
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;

