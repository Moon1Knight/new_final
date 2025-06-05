import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";


interface Notice {
  title: string;
  createdAt: Date;
}

const NoticeBoard = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const navigate = useNavigate();

  const bgColors = [
    'bg-blue-600',
    'bg-red-600',
    'bg-orange-500',
    'bg-green-500',
    'bg-cyan-600',
    'bg-yellow-500',
    'bg-indigo-700'
  ];

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const q = query(collection(db, 'notices'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const noticesData: Notice[] = querySnapshot.docs.map(doc => ({
          title: doc.data().title,
          createdAt: doc.data().createdAt?.toDate()
        }));
        setNotices(noticesData);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();
  }, []);

  const handleNoticeClick = () => {
    navigate('/news?section=NoticeBoard&Alerts');
  };

  return (
    <div className="bg-white/80  backdrop-blur-sm py-1 sm:py-1.5 overflow-hidden shadow-md z-40 relative">
      <div className="max-w-[95rem] mx-auto">
        <div className="overflow-hidden w-full">
          <div
            className="flex whitespace-nowrap animate-marquee notice-marquee"
          >
            {[...notices, ...notices].map((notice, index) => (
              <span
                key={index}
                className={`inline-block px-2 sm:px-4 py-1 text-white cursor-pointer hover:animate-none transition-transform duration-200 ${
                  bgColors[index % bgColors.length]
                } border-r border-white/20 text-[11px] sm:text-sm`}
                onClick={handleNoticeClick}
                onMouseEnter={e => e.currentTarget.classList.remove('animate-marquee-item')}
                onMouseLeave={e => e.currentTarget.classList.add('animate-marquee-item')}
              >
                {notice.title}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style >{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-item {
          animation-play-state: running;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 15s !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NoticeBoard;
