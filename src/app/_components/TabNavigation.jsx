"use client";
import React, { useState } from "react";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Services");

  const tabs = ["About", "Projects", "Services"];

  return (
    <div className="md:px-[140px]">
      <div className="tab-navigation-bar w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`transition ${
              activeTab === tab
                ? "navigation-button-active inter-black-20-500"
                : "navigation-button-inactive inter-white-20-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
