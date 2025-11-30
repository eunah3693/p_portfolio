import React from 'react';

/**
 * Contact 섹션 컴포넌트
 * 
 * 기초 지식:
 * - 연락처 정보를 보여주는 마지막 섹션
 * - Thank you 메시지와 함께 연락 가능한 정보 표시
 */
interface ContactSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
  onClick: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  sectionRef,
  onClick,
}) => {
  return (
    <section className="contact_wrap" ref={sectionRef}>
      <div className="title contact_title" onClick={onClick}>
        <h1>CONTACT</h1>
      </div>
      <div className="wrap">
        <div className="bg">
          <h4>Thank you for reading</h4>
          <p>
            Kim EunAh <br />
            010-9824-2104 <br />
            eunah3693@naver.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

