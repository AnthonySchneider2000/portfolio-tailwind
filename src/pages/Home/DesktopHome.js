import Sidebar from "components/Sidebar/SidebarDesktop";
import { PortfolioItemContainer } from "components/PortfolioItemContainer";
import PortfolioDetailContainer from "components/PortfolioDetailContainer";
import AboutMe from "components/AboutMe";

function DesktopHome() {
  return (
    <div className="dpageContainer">
      <AboutMe />
      <Sidebar />
      <PortfolioItemContainer />
      <PortfolioDetailContainer />
    </div>
  );
}

export default DesktopHome;
