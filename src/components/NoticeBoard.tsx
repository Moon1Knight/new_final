import React from 'react';

const NoticeBoard = () => {
  const notices = [
    {
      text: '🎓 Admissions Open for Academic Year 2024-25 - Apply Now!',
      bgColor: 'bg-red-600'
    },
    {
      text: '📚 Annual Sports Day - March 15, 2024 - All Parents Welcome',
      bgColor: 'bg-blue-600'
    },
    {
      text: '🌟 School Holiday on March 8, 2024 - International Women\'s Day',
      bgColor: 'bg-green-600'
    },
    {
      text: '📢 Parent-Teacher Meeting Scheduled for March 20, 2024',
      bgColor: 'bg-orange-600'
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm py-1 sm:py-1.5 overflow-hidden shadow-md">
      <div className="max-w-[95rem] mx-auto">
        <div className="overflow-hidden">
          <div className="whitespace-nowrap" style={{
            animation: 'marquee 25s linear infinite',
          }}>
            {notices.map((notice, index) => (
              <span
                key={index}
                className={`inline-block px-2 sm:px-4 py-1 text-white ${notice.bgColor} border-r border-white/20 text-[11px] sm:text-sm`}
              >
                {notice.text}
              </span>
            ))}
            {/* Duplicate notices for seamless scrolling */}
            {notices.map((notice, index) => (
              <span
                key={`dup-${index}`}
                className={`inline-block px-2 sm:px-4 py-1 text-white ${notice.bgColor} border-r border-white/20 text-[11px] sm:text-sm`}
              >
                {notice.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .whitespace-nowrap:hover {
            animation-play-state: paused;
          }
          @media (max-width: 640px) {
            .whitespace-nowrap {
              animation-duration: 15s;
            }
          }
        `}
      </style>
    </div>
  );
};

export default NoticeBoard; 