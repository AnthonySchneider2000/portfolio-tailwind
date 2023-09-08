import Sidebar from "components/Sidebar/SidebarDesktop";
import { PortfolioItemContainer } from "components/PortfolioItemContainer";

//TODO: make sidebarWidth a variable, possibly controlled by useState, so that it can be changed by the user
// maybe use emotion for variable css
function DesktopHome() {
  return (
    <div
      className="dpageContainer"
    >
      <Sidebar />
      <PortfolioItemContainer />
    </div>
  );
}

export default DesktopHome;
