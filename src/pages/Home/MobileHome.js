import Sidebar from "components/Sidebar/SidebarMobile";
import { PortfolioItemContainer } from "components/PortfolioItemContainer";

//TODO: make sidebarWidth a variable, possibly controlled by useState, so that it can be changed by the user
// maybe use emotion for variable css
function MobileHome() {
  return (
    <div
      className="mpageContainer"
    >
      <Sidebar />
      <PortfolioItemContainer />
    </div>
  );
}

export default MobileHome;
