
import React, { useState } from 'react';
import OneTrip from './Forms/oneTrip'
import RoundTrip from './Forms/roundTrip';
import MultiLeg from './Forms/multiLeg';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="sm:w-[720px] bg-black mx-auto md:py-[230px] md:px-[105px] bg-black justify items-center h-[900px]">
      {/* Tab navigation */}
      <div className="flex justify-center gap-4 md:gap-[30px] mb-8 ">
        {['One Trip', 'Round Trip', 'Multi Leg'].map((tab, index) => (
          <button
            key={index}
            className={`hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white w-[100px] rounded-[5px] py-2 ${
              activeTab === `tab${index + 1}` ? 'bg-white text-black' : 'bg-black text-white'
            }`}
            onClick={() => handleTabClick(`tab${index + 1}`)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content for each tab */}
      <div>
        {activeTab === 'tab1' && <OneTrip />}
        {activeTab === 'tab2' && <RoundTrip />}
        {activeTab === 'tab3' && <MultiLeg />}
      </div>
    </div>
  );
};

export default TabComponent;

