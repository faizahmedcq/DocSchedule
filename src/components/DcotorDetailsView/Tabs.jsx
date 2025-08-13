import React, { useState } from 'react';

const Tabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      <div className="border-b border-gray-200">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-4 text-sm font-medium focus:outline-none transition-colors duration-200 
                ${activeTab === tab.id 
                  ? 'border-b-2 border-blue-600 text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4">
        {tabsData.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;