import Sidebar from "components/Sidebar";
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

function Home() {
  return (
    <div
      className="bg-cyan-600 h-screen w-screen flex flex-col"
      style={{ "--sidebar-width": sidebarWidth }} // Use the imported variable in inline style
    >
      <Sidebar />
      <PortfolioItemContainer />
    </div>
  );
}

export default Home;
