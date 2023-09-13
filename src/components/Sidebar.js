import AboutMeIcon from "@mui/icons-material/Person";
import PortfolioIcon from "@mui/icons-material/Article";
import MailIcon from "@mui/icons-material/Mail";
import { Tooltip } from "@mui/material";

const DesktopItems = [
  { icon: <AboutMeIcon fontSize="large" />, text: "About Me", link: "about" },
  { icon: <PortfolioIcon fontSize="large" />, text: "Portfolio", link: "portfolio" },
  { icon: <MailIcon fontSize="large" />, text: "Contact", link: "contact" },
];

const MobileItems = [
  { icon: <AboutMeIcon fontSize="medium" />, text: "About Me", link: "about" },
  { icon: <PortfolioIcon fontSize="medium" />, text: "Portfolio", link: "portfolio" },
  { icon: <MailIcon fontSize="medium" />, text: "Contact", link: "contact" },
];

const SidebarItem = ({ icon, text, link, placement, scrollToSection, destinationRef  }) => {
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
        <div className="sidebarItem" onClick={() => scrollToSection(destinationRef)}>
          {icon}</div>
    </Tooltip>
  );
};

export default function Sidebar({ sidebarVersion, scrollToSection, aboutRef, portfolioRef, contactRef }) {
  const sidebarStyle = sidebarVersion === "mobile" ? "msidebar" : "dsidebar";
  const placement = sidebarVersion === "mobile" ? "bottom" : "right";
  const items = sidebarVersion === "mobile" ? MobileItems : DesktopItems; //in case i want to shrink the fontSize of the icons on mobile
  
  return (
    <div className={sidebarStyle}>
      {items.map((item, index) => (
        <SidebarItem
          key={index}
          icon={item.icon}
          text={item.text}
          link={item.link}
          placement={placement}
          scrollToSection={scrollToSection}
          destinationRef={item.link === "about" ? aboutRef : item.link === "portfolio" ? portfolioRef : contactRef}
        />
      ))}
    </div>
  );
}
