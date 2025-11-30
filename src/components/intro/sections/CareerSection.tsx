import React from 'react';

/**
 * Career 섹션 컴포넌트
 * 
 * 기초 지식:
 * - 경력 및 자격증 정보를 보여주는 섹션
 */
interface CareerSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
  onClick: () => void;
}

const CareerSection: React.FC<CareerSectionProps> = ({
  sectionRef,
  onClick,
}) => {
  return (
    <section className="career_wrap" ref={sectionRef}>
      <div className="title career_title" onClick={onClick}>
        <h1>CAREER</h1>
      </div>
      <div className="wrap">
        <div className="top">
          <div className="top_left">
            <h2>CAREER</h2>
          </div>
          <div className="top_right"></div>
        </div>
        <div className="content">
          <div className="content_left">
            <div className="photo num3"></div>
          </div>
          <div className="content_right">
            <div className="content_title">
              <span>NO.3</span>
              <h3>CERTIFICATION CAREER</h3>
            </div>
            <div className="content_area">
              <p>
                2020.04 ~ 2020.10 웹디자인 & 웹퍼블리셔 과정 수료
                (하이미디어컴퓨터학원) <br />
                2020.09 포토샵 1급 <br />
                2020.09 웹디자인 기능사 <br />
                <br />
                2020.12 ~ 2021.12 지유월드와이드 퍼블리싱, 프론트앤드 <br />
                2020.10 ~ 2020.12 미라클 웹디자인, 퍼블리싱
                <br />
                2016.10 ~ 2018.09 청년희망재단 채용팀 채용전반 행정업무
              </p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom_left">
            <p>
              2020.04 ~ 2020.10 웹디자인 & 웹퍼블리셔 과정 수료
              (하이미디어컴퓨터학원) <br />
              2020.09 포토샵 1급 <br />
              2020.09 웹디자인 기능사 <br />
              <br />
              2020.12 ~ 2021.12 지유월드와이드 퍼블리싱,프론트앤드 <br />
              2020.10 ~ 2020.12 미라클 웹디자인, 퍼블리싱
              <br />
              2016.10 ~ 2018.09 청년희망재단 채용팀 채용전반 행정업무
            </p>
          </div>
          <div className="bottom_right"></div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;

