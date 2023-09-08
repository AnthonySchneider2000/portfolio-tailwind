import Sidebar from "components/Sidebar/SidebarDesktop";
import { PortfolioItemContainer } from "components/PortfolioItemContainer";
import PortfolioDetailContainer from "components/PortfolioDetailContainer";

function DesktopHome() {
  return (
    <div className="dpageContainer">
      <Sidebar />
      <PortfolioItemContainer />
      <PortfolioDetailContainer />
    </div>
  );
}

export default DesktopHome;
