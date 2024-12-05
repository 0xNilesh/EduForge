import React from 'react';

interface SocialCardProps {
  socialIconUrl: string;
  linkUrl: string;
  text: string;
  hoverColor: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ socialIconUrl, linkUrl, text, hoverColor }) => {
  return (
    <div
      className="relative w-[290px] h-[360px] bg-darkest border border-solid border-[#5F5F68] flex flex-col justify-between opacity-70"
      style={{ transition: "background-color 0.3s" }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "#17252A")
      }
    >
      <div className="flex flex-col justify-between h-full p-3">
        <div className="flex justify-between p-6 items-center">
          <img src={socialIconUrl} alt="Social Icon" className="w-12 h-12" />
          <a
            href={linkUrl}
            className="bg-white rounded-full shadow-md w-16 h-16"
            target="_blank"
          >
            <img
              src={'./top-right-arrow-btn.webp'}
              alt="Arrow Button"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
        <div className="text-white text-center text-4xl font-bold p-4">
          {text}
        </div>
      </div>
      <div className="absolute bottom-[-1px] right-[-1px] w-[30px] h-[30px] bg-dark border-solid border border-r-0 border-b-0 border-[#5F5F68]"></div> {/* Replaced bg-secondary-dark with bg-gray-900 */}
    </div>
  );
};

export default SocialCard;
