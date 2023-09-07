import Sidebar from "components/Sidebar/SidebarDesktop";
import PortfolioItem from "components/PortfolioItem";
import { sidebarWidth } from "utils/constants";

const PortfolioItemContainer = () => {
  return (
    <div className="portfolioItemContainer">
      <PortfolioItem
        title="AGSFlix"
        description="Test"
        image="Test"
        link="https://agsflix.vercel.app/"
      />
      <PortfolioItem
        title="Trail Tours"
        description="Test"
        image="Test"
        link="https://trail-tours.vercel.app/"
      />
      <PortfolioItem
        title="Playlist"
        description="Test"
        image="Test"
        link="https://youtube-playlist-manager-ags.vercel.app/"
      />
    </div>
  );
};
//TODO: make sidebarWidth a variable, possibly controlled by useState, so that it can be changed by the user
// maybe use emotion for variable css
function MobileHome() {
  return (
    <div
      className="pageContainer"
      style={{ "--sidebar-width": sidebarWidth }} // Use the imported variable in inline style
    >
      <Sidebar />
      <PortfolioItemContainer />
    </div>
  );
}

export default MobileHome;
