import Sidebar from "components/Sidebar";
import { PortfolioItemContainer } from "components/PortfolioItemContainer";
import PortfolioDetailContainer from "components/PortfolioDetailContainer";
import AboutMe from "components/AboutMe";

function MobileHome() {
  return (
    <div className="mpageContainer">
      <Sidebar sidebarVersion={"mobile"} />
      <AboutMe />
      <PortfolioItemContainer />
      <PortfolioDetailContainer />
    </div>
  );
}

export default MobileHome;
