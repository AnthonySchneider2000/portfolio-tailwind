import React from "react";
import AboutMeIcon from "@mui/icons-material/Person";
import PortfolioIcon from '@mui/icons-material/Terminal';
import ResumeIcon from "@mui/icons-material/Article";
import ContactIcon from "@mui/icons-material/Mail";
import { Tooltip } from "@mui/material";

const sidebarItems = [
  { icon: <AboutMeIcon />, text: "About Me", link: "about" },
  { icon: <ResumeIcon />, text: "Resume", link: "resume" },
  { icon: <PortfolioIcon />, text: "Portfolio", link: "portfolio" },
  { icon: <ContactIcon />, text: "Contact", link: "contact" },
];

const SidebarItem = ({ sidebarVersion, icon, text, placement, scrollToSection, destinationRef, fontSize }) => {
  const sidebarItemStyle = sidebarVersion === "mobile" ? "msidebarItem" : "dsidebarItem";
  return (
    <Tooltip
      title={<div className="text-xl">{text}</div>}
      placement={placement} // Use the provided placement prop
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: "rgb(17 24 39)", // bg-gray-900
            padding: "0.5rem",
          },
        },
      }}
    >
      <div className={sidebarItemStyle} onClick={() => scrollToSection(destinationRef)}>
        {React.cloneElement(icon, { fontSize })}
      </div>
    </Tooltip>
  );
};


export default function Sidebar({ sidebarVersion, scrollToSection, aboutRef, portfolioRef, resumeRef, contactRef }) {
  const sidebarStyle = sidebarVersion === "mobile" ? "msidebar" : "dsidebar";
  const placement = sidebarVersion === "mobile" ? "bottom" : "right";

  const destinationRefs = {
    about: aboutRef,
    portfolio: portfolioRef,
    resume: resumeRef,
    contact: contactRef,
  };
  
  const fontSize = sidebarVersion === "mobile" ? "medium" : "large";

  return (
    <div className={sidebarStyle}>
      {sidebarItems.map((item, index) => (
        <SidebarItem
          sidebarVersion={sidebarVersion}
          icon={item.icon}
          key={index}
          text={item.text}
          placement={placement}
          scrollToSection={scrollToSection}
          destinationRef={destinationRefs[item.link]}
          fontSize={fontSize}
        />
      ))}
    </div>
  );
}
