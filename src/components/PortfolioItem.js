import React from "react";

export default function PortfolioItem({ title, description, image, link }) {
  return (
    <div className="portfolioItem">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="portfolioItemText"
      >
        <div> 
        {/* this div exists so the title doesnt touch the outside of the a tag, which has padding */} 
        {title}
        </div>
      </a>
    </div>
  );
}
