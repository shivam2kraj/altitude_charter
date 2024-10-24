
import React, { useState } from 'react';
import OneTrip from './Forms/oneTrip';
import RoundTrip from './Forms/roundTrip';
import MultiLeg from './Forms/multiLeg';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16"> 
      {/* Tab navigation */}
      <div className="flex justify-between gap-2 sm:gap-4 md:gap-[30px] mb-8 w-full max-w-lg">
        {['One Trip', 'Round Trip', 'Multi Leg'].map((tab, index) => (
          <button
            key={index}
            className={`hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white w-full sm:w-auto rounded-[5px] py-2 px-4 text-sm sm:text-base md:text-lg ${
              activeTab === `tab${index + 1}` ? 'bg-white text-black' : 'bg-black text-white'
            }`}
            onClick={() => handleTabClick(`tab${index + 1}`)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content for each tab */}
      <div className="w-full max-w-xl">
        {activeTab === 'tab1' && <OneTrip />}
        {activeTab === 'tab2' && <RoundTrip />}
        {activeTab === 'tab3' && <MultiLeg />}
      </div>
    </div>
  );
};

export default TabComponent;
