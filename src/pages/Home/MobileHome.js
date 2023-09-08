import Sidebar from "components/Sidebar/SidebarMobile";
import { PortfolioItemContainer } from "components/PortfolioItemContainer";
import PortfolioDetailContainer from "components/PortfolioDetailContainer";

function MobileHome() {
  return (
    <div className="mpageContainer">
      <Sidebar />
      <PortfolioItemContainer />
      <PortfolioDetailContainer />
    </div>
  );
}

export default MobileHome;
