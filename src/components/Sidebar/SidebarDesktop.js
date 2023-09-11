import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MailIcon from "@mui/icons-material/Mail";
import { Tooltip } from "@mui/material";

const Item = ({ icon, text = "tooltip" }) => {
  return (
    <Tooltip
      title={<div className="text-xl">{text}</div>}
      placement="right"
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: "rgb(17 24 39)", // bg-gray-900
            padding: "0.5rem",
          },
        },
      }}
    >
      <div className="dsidebarItem">{icon}</div>
    </Tooltip>
  );
};

const SidebarDesktop = () => {
  return (
    <div className="dsidebar">
      <Item icon={<HomeIcon fontSize="large" />} text="Home" />
      <Item icon={<ContactPageIcon fontSize="large" />} text="Contact" />
      <Item icon={<MailIcon fontSize="large" />} text="Email" />
    </div>
  );
};

export default SidebarDesktop;
