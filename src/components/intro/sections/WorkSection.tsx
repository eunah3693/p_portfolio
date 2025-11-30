import React from 'react';

/**
 * Work 섹션 컴포넌트
 * 
 * 기초 지식:
 * - 작업 프로젝트를 보여주는 섹션
 * - 여러 개의 Work 섹션을 재사용하기 위해 props로 데이터를 받음
 */
interface WorkSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
  onClick: () => void;
  workNumber: 1 | 2 | 3 | 4; // Work 번호 (1~4)
  title: string; // 프로젝트 제목
  number: string; // NO.X
  details: string; // 프로젝트 세부사항 (HTML 문자열)
  imageClass: string; // 이미지 클래스 (num4, num5 등)
  onProjectClick?: () => void; // 프로젝트 클릭 시 실행할 함수
}

const WorkSection: React.FC<WorkSectionProps> = ({
  sectionRef,
  onClick,
  workNumber,
  title,
  number,
  details,
  imageClass,
  onProjectClick,
}) => {
  return (
    <section className={`work_wrap wrap${workNumber}`} ref={sectionRef}>
      <div className="title work_title" onClick={onClick}>
        <h1>WORK{['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ'][workNumber - 1]}</h1>
      </div>
      <div className="wrap">
        <div className="top">
          <div className="work_top_left">
            <h2>WORK{['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ'][workNumber - 1]}</h2>
          </div>
          <div className="work_top_right"></div>
        </div>
        <div className="content">
          <div className="work_content_left">
            <div
              className={`photo ${imageClass}`}
              onClick={onProjectClick}
              style={{ cursor: onProjectClick ? 'pointer' : 'default' }}
            ></div>
          </div>
          <div className="work_content_right">
            <div className="content_title">
              <span>{number}</span>
              <h3>{title}</h3>
            </div>
            <div
              className="content_area"
              dangerouslySetInnerHTML={{ __html: details }}
            />
          </div>
        </div>
        <div className="bottom">
          <div className="work_bottom_left">
            <div dangerouslySetInnerHTML={{ __html: details }} />
          </div>
          <div className="work_bottom_right"></div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

