import React from 'react';

/**
 * Profile 섹션 컴포넌트
 * 
 * 기초 지식:
 * - 개인 프로필 정보를 보여주는 섹션
 * - 사진과 함께 이름, 생년월일, 연락처 등의 정보 표시
 */
interface ProfileSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
  onClick: () => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  sectionRef,
  onClick,
}) => {
  return (
    <section className="profile_wrap" ref={sectionRef}>
      <div className="title profile_title" onClick={onClick}>
        <h1>PROFILE</h1>
      </div>
      <div className="wrap">
        <div className="top">
          <div className="top_left">
            <h2>PROFILE</h2>
          </div>
          <div className="top_right"></div>
        </div>
        <div className="content">
          <div className="content_left">
            <div className="photo num1"></div>
            <div className="photo_bg num1"></div>
          </div>
          <div className="content_right">
            <div className="content_title">
              <span>NO.1</span>
              <h3>MY PROFILE</h3>
            </div>
            <div className="content_area">
              <p>
                이름 : 김은아 <br />
                생년월일 : 91.01.25
                <br />
                핸드폰번호 : 010-9824-2104
                <br />
                주소 : 서울시 동작구 상도4동 211-480 현대하이즈 103동 401호{' '}
                <br />
                학력: 가톨릭대학교 영문학 졸업
              </p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom_left">
            <p>
              이름 : 김은아 <br />
              생년월일 : 91.01.25
              <br />
              핸드폰번호 : 010-9824-2104
              <br />
              주소 : 서울시 동작구 상도4동 211-480 현대하이즈 103동 401호 <br />
              학력: 가톨릭대학교 영문학 졸업
            </p>
          </div>
          <div className="bottom_right"></div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

