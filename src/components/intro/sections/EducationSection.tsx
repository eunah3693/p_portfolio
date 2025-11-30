import React from 'react';

/**
 * Education 섹션 컴포넌트
 * 
 * 기초 지식:
 * - 학력 정보를 보여주는 섹션
 */
interface EducationSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
  onClick: () => void;
}

const EducationSection: React.FC<EducationSectionProps> = ({
  sectionRef,
  onClick,
}) => {
  return (
    <section className="education_wrap" ref={sectionRef}>
      <div className="title education_title" onClick={onClick}>
        <h1>EDUCATION</h1>
      </div>
      <div className="wrap">
        <div className="top">
          <div className="top_left">
            <h2>EDUCATION</h2>
          </div>
          <div className="top_right"></div>
        </div>
        <div className="content">
          <div className="content_left">
            <div className="photo num2"></div>
            <div className="photo_bg num2"></div>
          </div>
          <div className="content_right">
            <div className="content_title">
              <span>NO.2</span>
              <h3>MY EDUCATION</h3>
            </div>
            <div className="content_area">
              <p>
                2012.03 ~ 2014.08 가톨릭대학교 영문학 졸업
                <br />
                2009.03 ~ 2011.02 삼육대학교 상담심리학 수료 (편입) <br />
                2006.03 ~ 2009.02 동덕여자고등학교 졸업
              </p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom_left">
            <p>
              2012.03 ~ 2014.08 가톨릭대학교 영문학 졸업
              <br />
              2009.03 ~ 2011.02 삼육대학교 상담심리학 수료 (편입) <br />
              2006.03 ~ 2009.02 동덕여자고등학교 졸업
            </p>
          </div>
          <div className="bottom_right"></div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

