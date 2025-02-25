import React, { useEffect } from 'react';
import { FaLeftLong } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import aboutDetails from '../data/aboutDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutParams() {
  const { pageId } = useParams();
  const section = aboutDetails[pageId];

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  if (!section) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center text-red-500 text-xl">Section not found!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8" data-aos="fade-up">
      {/* Header */}
      <div className="flex items-center space-x-4 pb-4 border-b border-gray-200 mb-8">
        <FaLeftLong className="text-orange-500 text-2xl" />
        <h2 className="text-3xl font-semibold text-gray-800">{section.title}</h2>
      </div>

      {/* Content */}
      <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
        {/* First Section */}
        <div>
          <h3 className="text-2xl font-medium text-gray-800 mb-2">{section.heading1}</h3>
          <p className="mb-4">{section.content1}</p>
          {/* Image (conditionally rendered) */}
          {section.banner && (
            <div className="mt-4">
              <img
                src={section.banner}
                alt="Section Banner"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        {/* Second Section */}
        <div>
          <h3 className="text-2xl font-medium text-gray-800 mb-2">{section.heading2}</h3>
          <p className="mb-4">{section.content2}</p>
          {section.regards && (
            <div className="p-4 bg-gray-100 border border-gray-300 rounded">
              {section.regards}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutParams;
