"use client";
import Link from "next/link";
import React, { useState } from "react";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Services");

  const tabs = ["About", "Projects", "Services"];

  return (
    <div className="md:px-[140px] md:mb-[30px]">
      <div className="tab-navigation-bar w-fit">
        {tabs.map((tab) => (
          <Link
            key={tab}
            href={tab.toLocaleLowerCase()}
            // onClick={() => setActiveTab(tab)}
            className={`transition ${
              activeTab === tab
                ? "navigation-button-active inter-black-20-500"
                : "navigation-button-inactive inter-white-20-500"
            }`}
          >
            {tab}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
