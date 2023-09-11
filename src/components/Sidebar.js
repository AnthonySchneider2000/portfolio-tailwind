import AboutMeIcon from "@mui/icons-material/Person";
import PortfolioIcon from '@mui/icons-material/Article';
import MailIcon from "@mui/icons-material/Mail";
import { Tooltip } from "@mui/material";

const items = [
  { icon: <AboutMeIcon fontSize="large" />, text: "About Me" },
  { icon: <PortfolioIcon fontSize="large" />, text: "Portfolio" },
  { icon: <MailIcon fontSize="large" />, text: "Contact" },
];

const SidebarItem = ({ icon, text, placement }) => {
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
      <div className="sidebarItem">{icon}</div>
    </Tooltip>
  );
};

export default function Sidebar({ sidebarVersion }) {
  const sidebarStyle = sidebarVersion === "mobile" ? "msidebar" : "dsidebar";
  const placement = sidebarVersion === "mobile" ? "bottom" : "right";
  return (
    <div className={sidebarStyle}>
      {items.map((item, index) => (
        <SidebarItem
          key={index}
          icon={item.icon}
          text={item.text}
          placement={placement}
        />
      ))}
    </div>
  );
}
