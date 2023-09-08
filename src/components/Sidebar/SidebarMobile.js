import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { Tooltip } from "@mui/material";

const Item = ({ icon, text = "tooltip" }) => {
  return (
    <Tooltip title={<div className="text-xl">{text}</div>} placement="bottom" componentsProps={{
      tooltip: {
        sx: {
          backgroundColor: "rgb(17 24 39)", // bg-gray-900
          padding: "0.5rem",
        }
      }
    }} >
      <div className="msidebarItem">{icon}</div>
    </Tooltip>
  );
};

const SidebarMobile = () => {
  return (
    <div className="msidebar">
      <Item icon={<HomeIcon />} text="Home" />
      <Item icon={<PhoneIcon />} text="Contact" />
      <Item icon={<MailIcon />} text="Email" />
    </div>
  );
};

export default SidebarMobile;