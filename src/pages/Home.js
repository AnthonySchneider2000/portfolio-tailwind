import Sidebar from "components/Sidebar";
import PortfolioItem from "components/PortfolioItem";

function Home() {
  return (
    <div className="bg-cyan-600 h-screen w-screen flex flex-col">
      <Sidebar />
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
    </div>
  );
}

export default Home;
