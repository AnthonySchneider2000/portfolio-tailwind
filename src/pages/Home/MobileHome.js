import Sidebar from "components/Sidebar";
import { PortfolioItemContainer } from "components/PortfolioItemContainer";
import PortfolioDetailContainer from "components/PortfolioDetailContainer";
import AboutMe from "components/AboutMe";

function MobileHome() {
  return (
    <div className="mpageContainer">
      <AboutMe />
      <Sidebar sidebarVersion={"mobile"} />
      <PortfolioItemContainer />
      <PortfolioDetailContainer />
    </div>
  );
}

export default MobileHome;
