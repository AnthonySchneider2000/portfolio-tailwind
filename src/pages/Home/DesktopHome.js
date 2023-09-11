import Sidebar from "components/Sidebar";
import { PortfolioItemContainer } from "components/PortfolioItemContainer";
import PortfolioDetailContainer from "components/PortfolioDetailContainer";
import AboutMe from "components/AboutMe";

function DesktopHome() {
  return (
    <div className="dpageContainer">
      <AboutMe />
      <Sidebar sidebarVersion={"desktop"} />
      <PortfolioItemContainer />
      <PortfolioDetailContainer />
    </div>
  );
}

export default DesktopHome;
