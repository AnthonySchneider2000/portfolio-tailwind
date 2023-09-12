import Sidebar from "components/Sidebar";
import PortfolioItemContainer from "components/PortfolioItemContainer";
import PortfolioDetailContainer from "components/PortfolioDetailContainer";
import AboutMe from "components/AboutMe";

function DesktopHome() {
  return (
    <div className="dpageContainer">
      <Sidebar sidebarVersion={"desktop"} />
      <div id="about"></div>
      <AboutMe />
      <PortfolioItemContainer />
      <div id="portfolio"></div>
      <PortfolioDetailContainer />
      <div id="contact"></div>
    </div>
  );
}

export default DesktopHome;
