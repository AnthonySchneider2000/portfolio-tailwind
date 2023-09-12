import PortfolioItem from "components/PortfolioItem";
import { portfolioItems } from "utils/constants";

export default function PortfolioItemContainer () {
  return (
    <div className="pb-4">
      <div className="text-4xl font-bold ml-4 text-white">Portfolio</div>
      <div className="portfolioItemContainer">
        {Object.keys(portfolioItems).map((key) => {
          const { title, description, image, link } = portfolioItems[key];
          return (
            <PortfolioItem
              key={key}
              title={title}
              description={description}
              image={image}
              link={link}
            />
          );
        })}
      </div>
    </div>
  );
};
