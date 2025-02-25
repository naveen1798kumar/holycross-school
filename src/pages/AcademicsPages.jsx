import React from 'react';
import { useParams } from 'react-router-dom';
import academicsDetails from '../data/academicsDetails';

function AcademicsPages() {
  const { pageId } = useParams();
  const section = academicsDetails[pageId];

  if (!section) {
    return <div>Section not found.</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Academics: {section.title}</h1>
      <div className="mb-6">
        <p className="mb-4">{section.content}</p>
        {section.rules && Array.isArray(section.rules) && section.rules.length > 0 ? (
          <ul className="list-disc pl-6 space-y-2">
            {section.rules.map((rule, index) => (
              <li key={index} className="text-gray-700">
                {rule}
              </li>
            ))}
          </ul>
        ) : (
         <>
         </>
        )}
      </div>
    </div>
  );
}

export default AcademicsPages;
