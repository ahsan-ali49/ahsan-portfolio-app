"use client";
import Link from "next/link";
import React, { useState } from "react";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Services");

  const tabs = [
    { label: "About", link: "about" },
    { label: "Projects", link: "projects" },
    { label: "Services", link: "/" },
  ];

  return (
    <div className="md:px-[140px] md:mb-[30px]">
      <div className="tab-navigation-bar w-fit">
        {tabs.map((tab, index) => (
          <Link
            key={index}
            href={tab.link}
            onClick={() => setActiveTab(tab.label)}
            className={`transition ${
              activeTab === tab.label
                ? "navigation-button-active inter-black-20-500"
                : "navigation-button-inactive inter-white-20-500"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
