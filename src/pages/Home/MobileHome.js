import Sidebar from "components/Sidebar/SidebarMobile";
import { PortfolioItemContainer } from "components/PortfolioItemContainer";
import PortfolioDetailContainer from "components/PortfolioDetailContainer";
import AboutMe from "components/AboutMe";

function MobileHome() {
  return (
    <div className="mpageContainer">
      <AboutMe />
      <Sidebar />
      <PortfolioItemContainer />
      <PortfolioDetailContainer />
    </div>
  );
}

export default MobileHome;
