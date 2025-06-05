import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

interface Notice {
  id: string;
  title: string;
  description: string;
  fileUrl?: string;  // Cloudinary URL
  fileName?: string;
  fileType?: string;
  createdAt: Date;
}

const NoticeSection = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const q = query(collection(db, 'notices'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const noticesData: Notice[] = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            description: data.description || '',
            fileUrl: data.fileUrl || '',
            fileName: data.fileName || '',
            fileType: data.fileType || '',
            createdAt: data.createdAt?.toDate?.() || new Date(),
          };
        });
        setNotices(noticesData);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section className="mt-10 px-4 sm:px-8">
      {/* Notice List Container */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Table Header */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
          <div className="grid grid-cols-12 gap-4 px-6 py-4">
            <div className="col-span-7 sm:col-span-8 text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Notice Title
            </div>
            <div className="col-span-2 sm:col-span-2 text-sm font-semibold text-gray-700 uppercase tracking-wider text-center">
              Date
            </div>
            <div className="col-span-3 sm:col-span-2 text-sm font-semibold text-gray-700 uppercase tracking-wider text-center">
              Action
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
          {notices.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-500">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-lg font-medium">No notices available</p>
              <p className="text-sm">Check back later for updates</p>
            </div>
          ) : (
            notices.map((notice, index) => (
              <div
                key={notice.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 cursor-pointer group"
                onClick={() => setSelectedNotice(notice)}
              >
                {/* Title Column */}
                <div className="col-span-7 sm:col-span-8">
                  <h3 className="text-gray-900 font-medium text-sm sm:text-base line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {notice.title}
                  </h3>
                  {notice.description && (
                    <p className="text-gray-500 text-xs sm:text-sm mt-1 line-clamp-1">
                      {notice.description}
                    </p>
                  )}
                  {/* Update the attachments indicator section */}
                  <div className="flex items-center mt-2 space-x-2">
                    {notice.fileUrl && notice.fileType?.startsWith('image/') && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Image
                      </span>
                    )}
                    {notice.fileUrl && notice.fileType?.includes('pdf') && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-700">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        PDF
                      </span>
                    )}
                  </div>
                </div>

                {/* Date Column */}
                <div className="col-span-2 sm:col-span-2 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900">
                      {formatDate(notice.createdAt)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {notice.createdAt.toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </div>

                {/* Action Column */}
                <div className="col-span-3 sm:col-span-2 flex items-center justify-center">
                  <button 
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 group-hover:shadow-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedNotice(notice);
                    }}
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedNotice && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-white sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold truncate pr-4">
                  {selectedNotice.title}
                </h3>
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-2 text-blue-100 text-sm">
                Published on {formatDate(selectedNotice.createdAt)} at{' '}
                {selectedNotice.createdAt.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 88px)' }}>
              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {/* Left Column: Description */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                      Description
                    </h4>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {selectedNotice.description}
                    </p>
                  </div>
                </div>

                {/* Right Column: Attachments */}
                <div>
                  {selectedNotice.fileUrl && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                        Attachment
                      </h4>
                      {selectedNotice.fileType?.startsWith('image/') ? (
                        <div className="rounded-xl overflow-hidden shadow-lg">
                          <img
                            src={selectedNotice.fileUrl}
                            alt={selectedNotice.fileName || "Notice attachment"}
                            className="w-full h-auto"
                          />
                        </div>
                      ) : selectedNotice.fileType?.includes('pdf') && (
                        <div className="bg-gray-50 rounded-xl p-4">
                          <a
                            href={selectedNotice.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-4 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl transition-colors group"
                          >
                            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <div>
                              <p className="font-medium text-lg">View PDF Document</p>
                              <p className="text-sm text-red-600">{selectedNotice.fileName || 'Download PDF'}</p>
                            </div>
                            <svg className="w-6 h-6 ml-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NoticeSection;