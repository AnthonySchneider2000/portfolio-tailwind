import Sidebar from "components/Sidebar";
import { PortfolioItemContainer } from "components/PortfolioItemContainer";
import PortfolioDetailContainer from "components/PortfolioDetailContainer";
import AboutMe from "components/AboutMe";

function DesktopHome() {
  return (
    <div className="dpageContainer">
      <Sidebar sidebarVersion={"desktop"} />
      <AboutMe />
      <PortfolioItemContainer />
      <PortfolioDetailContainer />
    </div>
  );
}

export default DesktopHome;
