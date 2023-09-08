import PortfolioItem from "components/PortfolioItem";

export const PortfolioItemContainer = () => {
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